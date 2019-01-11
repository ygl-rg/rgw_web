define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        SetCfg: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetCfg", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetCfg: function (sessionid) {
            var paras = [sessionid];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetCfg", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RebootSys: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RebootSys", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RestartSys: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RestartSys", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RegisterDevice: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RegisterDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SyncDevice: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SyncDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});