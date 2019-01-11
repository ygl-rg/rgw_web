/**
 * Created by mathgl on 14-5-7.
 */

define(["dojo/_base/declare", "dojo/_base/lang", "dojo/_base/array", "dojo/on", "dojo/Evented",
        "dojox/collections/Dictionary",
        "roundgis/rtutils", "rgyabby/TrackerMapMarker"],
    function(declare, lang, darray, on, Evented, Dictionary, rtutils, TrackerMapMarker) {
        return declare([Evented], {
            map_obj: undefined,
            marker_tbl: undefined,
            mileage_tbl: undefined, //save the first vehicle event of  the day when user login
            curr_open_marker: undefined,

            constructor: function(spec) {
                lang.mixin(this, spec);
                this.marker_tbl = new Dictionary();
                this.mileage_tbl = new Dictionary();
            },

            SetMarkerVisible_: function(marker, visible) {
                marker.SetVisible(visible);
            },

            SetMarker: function(tracker_evt, icon_type) {
                var marker = this.marker_tbl.item(tracker_evt.trackerid);
                if(marker) {
                    marker.SetEvent(tracker_evt);
                }
                else {
                    marker = new TrackerMapMarker({map_obj: this.map_obj, "tracker_event": tracker_evt, 
                                                   "icon_type": (lang.isString(icon_type)?icon_type:"car")});
                    on(marker, "marker_click", lang.hitch(this, "HandleMarkerClick_"));
                    this.marker_tbl.add(tracker_evt.trackerid, marker);
                }
            },

            SetOfflineMarker: function(trackerid) {
                var marker = this.marker_tbl.item(trackerid);
                if(marker) {
                    marker.SetOfflineCarImg();
                    marker.SetOfflineLabel();
                }
            },

            //string | marker
            OpenMarker: function(marker, popup) {
                var marker_obj = undefined;
                if(lang.isString(marker)) {
                    marker_obj = this.GetMarker(marker);
                }
                else {
                    marker_obj = marker;
                }
                this.HandleOpenMarker_(marker_obj, popup);
            },

            HandleOpenMarker_: function(marker, popup) {
                if(this.curr_open_marker) {
                    this.curr_open_marker.CloseInfoWindow();
                    this.curr_open_marker.HasCircle(false);
                }
                this.curr_open_marker = marker;
                this.curr_open_marker.HasCircle(true);
                if(popup) {
                    this.curr_open_marker.ShowInfoWindow();
                }
            },

            HandleMarkerClick_: function(evt) {
                this.HandleOpenMarker_(evt.marker, true);
                this.emit("marker_click", evt);
            },

            SetMarkers: function(tracker_evts) {
                darray.forEach(tracker_evts, lang.hitch(this, function(item) {
                    this.SetMarker(item);
                }));
            },

            SetOfflineMarkers: function(trackerids) {
                for(var i = 0; i!== trackerids.length; ++i) {
                    this.SetOfflineMarker(trackerids[i]);
                }
            },

            Remove: function(trackerid) {
                var item = this.marker_tbl.item(trackerid);
                if(item) {
                    item.Remove();
                    this.marker_tbl.remove(trackerid);
                }
            },

            GetMarker: function(trackerid) {
                return this.marker_tbl.item(trackerid);
            },

            GetEventPair: function(trackerid) {
                var marker = this.marker_tbl.item(trackerid);
                var first = this.mileage_tbl.item(trackerid);
                return [((marker)?(marker.GetEvent()):undefined), first];
            },

            Disable: function(trackerid) {
                var marker = this.marker_tbl.item(trackerid);
                if(marker) {
                    this.SetMarkerVisible_(marker, false);
                }
            },

            DisableMany: function(trackerids) {
                for(var i = 0; i!== trackerids.length; ++i) {
                    this.Disable(trackerids[i]);
                }
            },

            DisableAll: function() {
                var items = this.marker_tbl.getValueList();
                darray.forEach(items, lang.hitch(this, function(item) {
                    this.SetMarkerVisible_(item, false);
                }));
            },

            Enable: function(trackerid) {
                var marker = this.marker_tbl.item(trackerid);
                if(marker) {
                    this.SetMarkerVisible_(marker, true);
                }
            },

            EnableMany: function(trackerids) {
                for(var i = 0; i!== trackerids.length; ++i) {
                    this.Enable(trackerids[i]);
                }
            },

            EnableAll: function() {
                var items = this.marker_tbl.getValueList();
                darray.forEach(items, lang.hitch(this, function(item) {
                    this.SetMarkerVisible_(item, true);
                }));
            },

            Clear: function() {
                var vals = this.marker_tbl.getValueList();
                darray.forEach(vals, lang.hitch(this, function(item) {
                    if(item) {
                        item.Remove();
                    }
                }));
                this.marker_tbl.clear();
            },

            SetMileage: function(trackerevt) {
                this.mileage_tbl.add(trackerevt.trackerid, trackerevt);
            },

            GetMileage: function(trackerid) {
                return this.mileage_tbl.item(trackerid);
            },
            
            SetMarkerVisible: function(trackerid, visible) {
                var marker = this.GetMarker(trackerid);
                if(marker) {
                    marker.SetVisible(visible);
                }
            }
        });
    });