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
        }
    };
});