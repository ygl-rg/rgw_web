/**
 * Created by mathgl on 16-1-25.
 */

define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        GetGroupInfo: function (sessionid) {
            var paras = [sessionid];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetGroupInfo", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        OpenRelaySwitch: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "OpenRelaySwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        CloseRelaySwitch: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "CloseRelaySwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetRGGWByGroup: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "GetRGGWByGroup", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        FindSwitch: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "FindSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        FindSensor: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "FindSensor", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        FindSensorMinsAvgLog: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "FindSensorMinsAvgLog", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        ExportSensorMinsAvgLog: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "ExportSensorMinsAvgLog", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        FindSensorRecentHourAvgLog: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "FindSensorRecentHourAvgLog", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        FindSensorLog: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "FindSensorLog", id: 1}),
                handleAs: "json", method: 'POST'});
        },
        
        SwitchRGGWMode: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SwitchRGGWMode", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        AddSchedule: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "AddSchedule", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetUserSchedules: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetUserSchedules", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RemoveSchedule: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RemoveSchedule", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});