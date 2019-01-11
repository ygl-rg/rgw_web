/**
 * Created by mathgl on 16-7-31.
 */


define(["dojo/_base/declare", "dojo/_base/lang", "dojo/Evented", "roundgis/rtutils",
    "roundgis/gmaputils", "rgyabby/tracker_event_utils", "rgyabby/img_urls"],
    function(declare, lang, Evented, rtutils, gmaputils, tracker_event_utils, img_urls) {
    return declare([Evented], {
        map_obj: undefined,
        loc_event: undefined,
        marker: undefined,
        info_window: undefined,
        label_visible: false,
        init_sync: true, //at the first time we see the marker, it ought to be sync.

        constructor: function(spec) {
            lang.mixin(this, spec);
            this.marker = new MarkerWithLabel({map: this.map_obj,
                                               position: gmaputils.GeoJSON2LatLng(tracker_event_utils.GetLoc(this.loc_event)),
                                               labelContent: "",
                                               labelClass: "",
                                               labelVisible: this.label_visible,
                                               labelStyle: {"backgroundColor": "green"}
                                               });
            this.marker.setIcon(img_urls.GetGreenHouseTbl());
            this.SetVisible(true);
        },

        IsVisible: function() {
            return ((this.marker)?this.marker.getVisible():false);
        },

        SetVisible: function(visible) {
            if(this.marker) {
                if(visible) {
                    if(this.init_sync) {
                        this.init_sync = false;
                        this.SyncState();
                    }
                    this.marker.setVisible(true);
                }
                else {
                    this.marker.setVisible(false);
                }
            }
        },

        SyncState: function() {
            if(this.marker) {
                this.marker.setPosition(gmaputils.GeoJSON2LatLng(tracker_event_utils.GetLoc(this.loc_event)));
            }
        },

        SetLocEvent: function(loc_event) {
            this.loc_event = loc_event;
            this.SyncState();
        },

        Remove: function() {
            if(this.marker) {
                google.maps.event.clearListeners(this.marker, "click");
                this.marker.setMap(null);
                this.marker = undefined;
            }
        },

        GetLocEvent: function() {
            return this.loc_event;
        }
    });
});