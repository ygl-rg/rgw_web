/**
 * Created by mathgl on 17-1-3.
 */


define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        AddSensorType: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "AddSensorType", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SetSensorType: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetSensorType", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetSensorType: function (sessionid, deviceid) {
            var paras = [sessionid, deviceid];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetSensorType", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RemoveSensorType: function (sessionid, sensorids) {
            var paras = [sessionid, sensorids];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RemoveSensorType", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SearchSensorType: function (sessionid, para) {
            var paras = [sessionid, para];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SearchSensorType", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});