define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        AddSwitch: function(arg) {
            return xhr(this.URL, {data: json.stringify({params:[arg], method: "AddSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SetSwitch: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetSwitch: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RemoveSwitch: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RemoveSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },


        SearchSwitch: function (para) {
            var paras = [para];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SearchSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SyncSwitch: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SyncSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});