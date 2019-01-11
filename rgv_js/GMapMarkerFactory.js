/**
 * Created by mathgl on 16-7-31.
 */

define(["dojo/_base/declare", "dojo/_base/lang", "dojo/_base/array", "dojo/on", "dojo/Evented",
        "dojox/collections/Dictionary",
        "roundgis/rtutils", "rgyabby/TrackerMapMarker", "rgyabby/GMapMarker"],
    function(declare, lang, darray, on, Evented, Dictionary, rtutils, TrackerMapMarker, GMapMarker) {
        return declare([Evented], {
            map_obj: undefined,
            marker_tbl: undefined,
            curr_open_marker: undefined,

            constructor: function(spec) {
                lang.mixin(this, spec);
                this.marker_tbl = new Dictionary();
            },

            SetMarkerVisible_: function(marker, visible) {
                marker.SetVisible(visible);
            },

            SetMarker: function(loc_evt) {
                var marker = this.marker_tbl.item(loc_evt.ownerid);
                if(marker) {
                    marker.SetLocEvent(loc_evt);
                }
                else {
                    marker = new GMapMarker({map_obj: this.map_obj, "loc_event": loc_evt})
                    this.marker_tbl.add(loc_evt.ownerid, marker);
                }
            },

            SetMarkers: function(loc_evts) {
                darray.forEach(loc_evts, lang.hitch(this, function(item) {
                    this.SetMarker(item);
                }));
            },

            Remove: function(ownerid) {
                var item = this.marker_tbl.item(ownerid);
                if(item) {
                    item.Remove();
                    this.marker_tbl.remove(ownerid);
                }
            },

            GetMarker: function(ownerid) {
                return this.marker_tbl.item(ownerid);
            },

            Disable: function(ownerid) {
                var marker = this.marker_tbl.item(ownerid);
                if(marker) {
                    this.SetMarkerVisible_(marker, false);
                }
            },

            DisableMany: function(ownerids) {
                for(var i = 0; i!== ownerids.length; ++i) {
                    this.Disable(ownerids[i]);
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

            SetMarkerVisible: function(locid, visible) {
                var marker = this.GetMarker(locid);
                if(marker) {
                    marker.SetVisible(visible);
                }
            }
        });
    });