/**
 * Created by mathgl on 2/17/16.
 */

define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        AddSensor: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "AddSensor", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SetSensor: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetSensor", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetSensor: function (sessionid, deviceid) {
            var paras = [sessionid, deviceid];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetSensor", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RemoveSensor: function (sessionid, sensorids) {
            var paras = [sessionid, sensorids];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RemoveSensor", id: 1}),
                handleAs: "json", method: 'POST'});
        },
        
        SetUsageInfo: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetUsageInfo", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SearchSensor: function (sessionid, para) {
            var paras = [sessionid, para];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SearchSensor", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});