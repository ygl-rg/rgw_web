define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        ListModule: function (para) {
            var paras = [para];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "ListModule", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        ProbeDevice: function (para) {
            var paras = [para];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "ProbeDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        ResetModule: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "ResetModule", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        BackupModule: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "BackupModule", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RestoreModule: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RestoreModule", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RebootModule: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RebootModule", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RebootAll: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RebootAll", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});