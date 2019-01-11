define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        SearchCamera: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "SearchCamera", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        AddCamera: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "AddCamera", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RemoveCamera: function (sessionid, rowids) {
            var paras = [sessionid, rowids];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RemoveCamera", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});