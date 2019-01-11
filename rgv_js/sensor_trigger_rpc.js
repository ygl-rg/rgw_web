define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        FindTrigger: function(arg) {
            return xhr(this.URL, {data: json.stringify({params:[arg], method: "FindTrigger", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SetTrigger: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetTrigger", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RemoveTrigger: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RemoveTrigger", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetTrigger: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetTrigger", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});