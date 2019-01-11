/**
 * Created by Administrator on 4/14/14.
 */

define(["dojo/dom-construct", "dojo/dom-style", "dojo/_base/array", "dojo/_base/lang", "roundgis/rtutils",
        "rgyabby/multi_lang"],
    function(domc, doms, darray, dlang, rtutils, multi_lang) {
    return {
        GetLoc: function(tracker_event) {
            return (dlang.isObject(tracker_event) && tracker_event)?tracker_event.loc:undefined;
        },
        
        HasMileageInfo: function(event) {
            return (dlang.isObject(event) && event)?("mileage" in event):false;
        },

        GetMileage: function(event) {
            return (this.HasMileageInfo(event))?event.mileage : 0;
        },

        HasAcc: function(tracker_event) {
            return dlang.isObject(tracker_event) && tracker_event && ("acc_on" in tracker_event);
        },

        GetAcc: function(event) {
            return (this.HasAcc(event)) ? event.acc_on : false;
        },

        //acc value set -> ["n/a", "on", "off"]
        GetAccStr: function (event) {
            if(this.HasAcc(event)) {
                return (event.acc_on) ? "on" : "off";
            }
            else {
                return "n/a";
            }
        },

        isAccOn: function(obj) {
            if(typeof obj == "string") {
                return obj == "on";
            }
            else {
                return this.getAccStr(obj) == "on";
            }
        },

        GetACCOnPNG: function(tracker_event) {
            var status = this.GetAccStr(tracker_event);
            if(status == "on") {
                return "/imgs/accon.png";
            }
            else {
                return "none";
            }
        },

        HasEngine: function(tracker_event) {
            return dlang.isObject(tracker_event) && tracker_event && ("engine_on" in tracker_event);
        },

        getEngine: function(event) {
            return (this.HasEngine(event)) ? event.engine_on : false;
        },

        //engine value set -> ["n/a", "on", "off"]
        GetEngineStr: function (event) {
            if(this.HasEngine(event)) {
                return (event.engine_on) ? "on" : "off";
            }
            else {
                return "n/a";
            }
        },

        isEngineOn: function(obj) {
            if(typeof obj == "string") {
                return obj == "on";
            }
            else {
                return this.getEngineStr(obj) == "on";
            }
        },

        GetEngineOnPNG: function(event) {
            var status = this.GetEngineStr(event);
            if(status == "on") {
                return "/imgs/engine_on.png";
            }
            else {
                return "none";
            }
        },

        //due to both engine sensor open or short must exist
        //so we only need to check one of them.
        getEngineSensorStatusPNG: function(event) {
            if("engine_sensor_open" in event) {
                if(event.engine_sensor_open) {
                    return "/imgs/engine_sensor_open.png";
                }
                else if(event.engine_sensor_short) {
                    return "/imgs/engine_sensor_short.png";
                }
                else {
                    return "/imgs/engine_sensor_ok.png";
                }
            }
            else {
                return "none";
            }
        },

        hasAC: function(event) {
            return "ac_on" in event;
        },

        getAC: function(event) {
            return (this.hasAc(event)) ? event.ac_on : false;
        },

        //ac value set -> ["n/a", "on", "off"]
        getACStr: function (event) {
            if(this.hasAC(event)) {
                return (event.ac_on) ? "on" : "off";
            }
            else {
                return "n/a";
            }
        },

        isACOn: function(obj) {
            if(typeof obj == "string") {
                return obj == "on";
            }
            else {
                return this.getACStr(obj) == "on";
            }
        },

        getACOnPNG: function(event) {
            var status = this.getACStr(event);
            if(status == "on") {
                return "/imgs/ac_on.png";
            }
            else {
                return "none";
            }
        },
        
        GetRelayPNG: function(obj) {
            if(this.HasRelay(obj)) {
                return (obj.relay_on)?"/imgs/relay_on.png":"/imgs/relay_off.png";
            }
            else {
                return "none";
            }
        },
        
        HasRelay: function(obj) {
            return dlang.isObject(obj) && obj && (obj.relay_on !== undefined);
        },

        hasDriverDoor: function(event) {
            return "driver_door_open" in event;
        },

        //ac value set -> ["n/a", "on", "off"]
        getDriverDoorStr: function (event) {
            if(this.hasDriverDoor(event)) {
                return (event.driver_door_open) ? "on" : "off";
            }
            else {
                return "n/a";
            }
        },

        isDriverDoorOpen: function(obj) {
            if(typeof obj == "string") {
                return obj == "on";
            }
            else {
                return this.getDriverDoorStr(obj) == "on";
            }
        },

        getDriverDoorStatusPNG: function (event) {
            var status_str = this.getDriverDoorStr(event);
            if(status_str == "on") {
                return "/imgs/driver_door_opened.png";
            }
            else if (status_str == "off") {
                return "/imgs/driver_door_closed.png";
            }
            else {
                return "none";
            }
        },

        HasSpeed: function(tracker_event) {
            return (dlang.isObject(tracker_event) && tracker_event && this.IsTraceValid(tracker_event))?("speed" in tracker_event):false;
        },

        GetGpsSpeed: function (tracker_event) {
            return (this.HasSpeed(tracker_event)) ? tracker_event.speed : 0;
        },

        IsRunning: function(event) {
            return this.IsTraceValid(event) && this.HasSpeed(event) && event.speed > 2;
        },

        IsTraceValid: function(event) {
            return event.trace_valid;
        },

        HasGSMStrength: function(event) {
            return dlang.isObject(event) && event && ("gsm_strength" in event);
        },

        GetGSMStrength: function(event) {
            return (this.HasGSMStrength(event))?(event.gsm_strength):-1;
        },

        hasSatellites: function(event) {
            return "satellites" in event;
        },

        //"n/a", "car", "battery"
        GetTrackerPowerTypeStr: function(obj) {
            if (dlang.isString(obj.power_type)) {
                return obj.power_type;
            }
            else {
                if ("power_off" in obj) {
                    return (obj.power_off) ? "battery" : "car";
                }
                else if("voltage_low" in obj) {
                    return (obj.voltage_low)?"battery":"car";
                }
                else {
                    return "n/a";
                }
            }
        },

        HasPowerType: function(obj) {
            if (dlang.isString(obj)) {
                return obj !== "n/a";
            }
            else {
                return this.GetTrackerPowerTypeStr(obj) !== "n/a";
            }
        },

        getTodayMileage: function(event) {
            return ("today_mileage" in event)?event.today_mileage:-1;
        },

        getTodayMileageStr: function(obj) {
            if("today_mileage" in obj) {
                if(obj.today_mileage >= 0) {
                    return obj.today_mileage.toFixed(0) + " KM";
                }
                else {
                    return "";
                }
            }
            else {
                return "";
            }
        },

        getFuelBarVol: function(event) {
            return ("fuel_bar_vol" in event)?event.fuel_bar_vol:-1;
        },

        getFuelBarVolStr: function(obj) {
            if("fuel_bar_vol" in obj) {
                if(obj.fuel_bar_vol >= 0) {
                    return (obj.fuel_bar_vol).toFixed(0);
                }
                else {
                    return "";
                }
            }
            else {
                return "";
            }
        },

        getTodayEngineOn: function(event) {
            return ("today_engine_on" in event)?event.today_engine_on:-1;
        },

        getTodayEngineOnStr: function(obj) {
            if("today_engine_on" in obj) {
                if(obj.today_engine_on >= 0) {
                    return (obj.today_engine_on/60).toFixed(0) + " mins";
                }
                else {
                    return "";
                }
            }
            else {
                return "";
            }
        },

        getLocationEvent: function(event) {
            return event.location_event;
        },

        hasFence: function(event) {
            return ("fence_events" in event) && (event.fence_events.length > 0);
        },


        hasFeature: function(event) {
            return ("feature_events" in event) && (event.feature_events.length > 0);
        },

        hasPublicFeature: function(event) {
            return ("public_feature_events" in event) && (event.public_feature_events.length > 0);
        },

        HasFenceEvent: function(event) {
            return ("fence_events" in event) && (event.fence_events.length > 0);
        },

        HasFence: function(event) {
            return ("fences" in event) && (event.fences.length > 0);
        },

        hasMaxAllowedSpeed: function(event) {
            return ("max_allowed_speed" in event) && event.max_allowed_speed > 0;
        },

        hasMaxAllowedParking: function(event) {
            return ("max_allowed_parking" in event) && event.max_allowed_parking > 0;
        },

        hasParkingDuration: function(event) {
            return ("parking_duration" in event) && event.parking_duration > 1;
        },

        hasTemperatureEvent: function(event) {
            return ("temperature_events" in event) && event.temperature_events.length > 0;
        },

        toBalloonDiv: function(trackerevt) {
            var box_text = domc.create("div");
            doms.set(box_text, "width", "175px");
            doms.set(box_text, "fontFamily", "Khmer UI");
            box_text.innerHTML = "";
            if(trackerevt.name) {
                box_text.innerHTML += rtutils.getLangField(multi_lang.labels['name'],
                                                           BasicEnv.lang)+": "+trackerevt.name;
                box_text.innerHTML += "<br>";
            }
            if(this.HasAcc(trackerevt)) {
                box_text.innerHTML += "ACC: "+ this.GetAccStr(trackerevt);
                box_text.innerHTML += "<br>";
            }
            if(this.HasEngine(trackerevt)) {
                box_text.innerHTML += "Engine: "+ this.GetEngineStr(trackerevt);
                box_text.innerHTML += "<br>";
            }
            if(this.HasSpeed(trackerevt)) {
                box_text.innerHTML += rtutils.getLangField(multi_lang.labels['speed'],
                                                           BasicEnv.lang)+": "+
                                                           (trackerevt.speed).toFixed(1)+" km/h";
                box_text.innerHTML += "<br>";
            }
            box_text.innerHTML += rtutils.getLangField(multi_lang.labels['time'],
                                                       BasicEnv.lang)+": "+
                                                       (rtutils.DT2Str(rtutils.ts2date(trackerevt.gps_time)));
            box_text.innerHTML += "<br>";
            return box_text;
        },

        locationEvent2Str: function(location_event) {
            var result = "";
            result += rtutils.getLangField(multi_lang.labels['country'], BasicEnv.lang)+
                      ": " + (rtutils.getLangField(location_event.country, BasicEnv.lang) || "")+"<br>";
            result += rtutils.getLangField(multi_lang.labels['province'], BasicEnv.lang)+"/"+
                      rtutils.getLangField(multi_lang.labels['city'], BasicEnv.lang)+
                      ": " + (rtutils.getLangField(location_event.state, BasicEnv.lang) || "") +"<br>";
            result += rtutils.getLangField(multi_lang.labels['district'], BasicEnv.lang) +
                      ": " + (rtutils.getLangField(location_event.district, BasicEnv.lang) || "") +"<br>";
            var village = rtutils.getLangField(location_event.village, BasicEnv.lang);
            if(village) {
                result +=rtutils.getLangField(multi_lang.labels['commune'], BasicEnv.lang)+
                         ": " + village +"<br>";
            }
            result += rtutils.getLangField(multi_lang.labels['road'], BasicEnv.lang)+ ": " + (rtutils.getLangField(location_event.road, BasicEnv.lang) || "") + "<br>";
            return result;
        },

        locationEvent2Msg: function(location_event, user_lang) {
            var msg = "";
            if (location_event.road) {
                msg += rtutils.getLangField(location_event.road, user_lang) + ",";
            }
            if (location_event.village) {
                msg += rtutils.getLangField(location_event.village, user_lang) + ",";
            }
            if (location_event.district) {
                msg += rtutils.getLangField(location_event.district, user_lang) + ",";
            }
            if (location_event.state) {
                msg += rtutils.getLangField(location_event.state, user_lang) + ",";
            }
            if (location_event.country) {
                msg += rtutils.getLangField(location_event.country, user_lang);
            }
            return msg;
        },
        
        GetTracker: function(tracker_store, trackerid) {
            var item = undefined;
            if(dlang.isFunction(tracker_store.getSync)) {
                item = tracker_store.getSync(trackerid);
            }
            else if(dlang.isFunction(tracker_store.Get)) {
                item = tracker_store.Get(trackerid);
            }
            else {}
            return item;
        },

        //events from vehicle might miss some data, so we need to attach them on fly
        //events will be modified
        AddInfoToEvent: function(event, tracker_store) {
            var item = this.GetTracker(tracker_store, event.trackerid);
            if(item) {
                if("vehicleinfo" in item) {
                    event.name = item.vehicleinfo.name;
                }
                else {
                    event.name = item.name;
                }
            }
        },

        AddInfoToEvents: function(events, tracker_store) {
            for(var i = 0; i!==events.length; ++i) {
                this.AddInfoToEvent(events[i], tracker_store);
            }
        },

        AddInfoToHisEvents: function(events, tracker_store, trackerid) {
            var item = this.GetTracker(tracker_store, trackerid);
            if(item) {
                for(var i = 0; i!==events.length; ++i) {
                    if("vehicleinfo" in item) {
                        events[i].name = item.vehicleinfo.name;
                    }
                    else {
                        events[i].name = item.name;
                    }
                }
            }
        }
    };
});