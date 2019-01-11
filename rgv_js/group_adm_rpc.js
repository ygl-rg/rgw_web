/**
 * Created by mathgl on 16-2-26.
 */


define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",
        
        AddGroup: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "AddGroup", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SetGroup: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetGroup", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetGroup: function (sessionid, deviceid) {
            var paras = [sessionid, deviceid];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetGroup", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RemoveGroup: function (sessionid, deviceids) {
            var paras = [sessionid, deviceids];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RemoveGroup", id: 1}),
                handleAs: "json", method: 'POST'});
        },
        
        FindGroup: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "FindGroup", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SearchGroup: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SearchGroup", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});