define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        OpenSwitch: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "OpenSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        CloseSwitch: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "CloseSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        ListDevice: function(arg) {
            return xhr(this.URL, {data: json.stringify({params:[arg], method: "ListDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        FindSensorMinsAvgLog: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "FindSensorMinsAvgLog", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SampleSensor: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SampleSensor", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});