/**
 * Created by mathgl on 14-5-7.
 */


define(["dojo/_base/declare", "dojo/_base/lang", "dojo/Evented", "roundgis/rtutils",
    "roundgis/gmaputils", "rgyabby/tracker_event_utils"],
    function(declare, lang, Evented, rtutils, gmaputils, tracker_event_utils) {
    return declare([Evented], {
        map_obj: undefined,
        tracker_event: undefined,
        icon_type: "car",
        marker: undefined,
        info_window: undefined,
        label_visible: true,
        init_sync: true, //at the first time we see the marker, it ought to be sync.
        curr_address: undefined,
        has_circle: false,

        constructor: function(spec) {
            lang.mixin(this, spec);
            var loc_obj = tracker_event_utils.GetLoc(this.tracker_event);
            this.marker = new MarkerWithLabel({map: this.map_obj,
                                               position: new google.maps.LatLng(loc_obj.coordinates[1], loc_obj.coordinates[0]),
                                               labelContent: this.tracker_event.name || "",
                                               labelClass: "gmap_vehicle_marker_label",
                                               labelVisible: this.label_visible,
                                               labelStyle: {"backgroundColor": "green"}
                                               });
            if(this.icon_type == "point") {
                this.marker.setIcon(rtutils.getVehiclePointImg());
            }
            else if(this.icon_type == "point_green") {
                this.marker.setIcon(rtutils.getGreenPointImg());
            }
            else if(this.icon_type == "car") {
                this.marker.setIcon(rtutils.getBearingGreenCarImg(this.tracker_event.direction, this.has_circle));
                this.SetVisible(false);
            }
            else {
                this.SetVisible(false);
            }
            google.maps.event.addListener(this.marker, "click", lang.hitch(this, function(evt) {
                this.emit("marker_click", {marker: this});
            }));
        },

        SetInfoWindow: function(tracker_evt) {
            var content_div = tracker_event_utils.toBalloonDiv(tracker_evt);
            if(tracker_evt.location_event) {
                content_div.innerHTML += tracker_event_utils.locationEvent2Str(tracker_evt.location_event);
            }
            if(this.info_window) {
                this.info_window.setContent(content_div);
            }
            else {
                this.info_window = new google.maps.InfoWindow({content: content_div});
            }
        },

        SetLabel: function(trackerevt) {
            if(this.marker.label && this.label_visible) {
                var content = trackerevt.name || "";
                if(tracker_event_utils.IsRunning(trackerevt)) {
                    content += "  "+(trackerevt.speed).toFixed(0).toString()+" km/h";
                }
                this.marker.labelContent = content;
                if(tracker_event_utils.IsTraceValid(trackerevt)) {
                    if(tracker_event_utils.IsRunning(trackerevt)) {
                        this.marker.labelStyle = {"backgroundColor": "blue"};
                    }
                    else {
                        this.marker.labelStyle = {"backgroundColor": "green"};
                    }
                }
                else {
                    this.marker.labelStyle = {"backgroundColor": "grey"};
                }
                this.marker.label.setContent();
                this.marker.label.setStyles();
            }
        },

        SetCarImg: function(carevt) {
            if(tracker_event_utils.IsTraceValid(carevt)) {
                if(tracker_event_utils.IsRunning(carevt)) {
                    this.marker.setIcon(rtutils.getBearingBlueCarImg(carevt.direction, this.has_circle));
                }
                else {
                    this.marker.setIcon(rtutils.getBearingGreenCarImg(carevt.direction, this.has_circle));
                }
            }
            else {
                this.marker.setIcon(rtutils.getBearingGreyCarImg(0, this.has_circle));
            }
        },

        SetOfflineCarImg: function() {
            if(this.marker) {
                this.marker.setIcon(rtutils.getBearingRedCarImg(0, this.has_circle));
            }
        },

        SetOfflineLabel: function() {
            if(this.marker.label) {
                this.marker.labelStyle = {"backgroundColor": "red"};
                this.marker.label.setStyles();
            }
        },

        ShowInfoWindow: function() {
            this.SetInfoWindow(this.tracker_event);
            this.info_window.open(this.marker.map, this.marker);
        },

        CloseInfoWindow: function() {
            if(this.info_window) {
                this.info_window.close();
            }
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
                    this.CloseInfoWindow();
                }
            }
        },

        SyncState: function() {
            if(this.marker) {
                var loc_tbl = tracker_event_utils.GetLoc(this.tracker_event);
                this.marker.setPosition(new google.maps.LatLng(loc_tbl['coordinates'][1], loc_tbl['coordinates'][0]));
                this.SetInfoWindow(this.tracker_event);
                this.SetLabel(this.tracker_event);
                if(this.icon_type == "car") {
                    this.SetCarImg(this.tracker_event);
                }
            }
        },

        SetEvent: function(trackerevt) {
            if(this.tracker_event.id !== trackerevt.id) {
                this.tracker_event = trackerevt;
                this.SyncState();
            }
        },

        HasCircle: function(has_circle) {
            this.has_circle = has_circle;
            if(BasicEnv.offlineids.indexOf(this.tracker_event.trackerid) >= 0) {
                this.SetOfflineCarImg();
            }
            else {
                this.SetCarImg(this.tracker_event);
            }
        },

        Remove: function() {
            if(this.marker) {
                google.maps.event.clearListeners(this.marker, "click");
                this.marker.setMap(null);
                this.marker = undefined;
            }
        },

        GetEvent: function() {
            return this.tracker_event;
        }
    });
});