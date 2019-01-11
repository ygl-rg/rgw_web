define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        AddSensor: function(arg) {
            return xhr(this.URL, {data: json.stringify({params:[arg], method: "AddSensor", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SetSensor: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetSensor", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetSensor: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetSensor", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RemoveSensor: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RemoveSensor", id: 1}),
                handleAs: "json", method: 'POST'});
        },


        SearchSensor: function (para) {
            var paras = [para];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SearchSensor", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SyncSensor: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SyncSensor", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});