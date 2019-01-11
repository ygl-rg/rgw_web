/**
 * Created by mathgl on 16-2-26.
 */


define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",
        
        AddUser: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "AddUser", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SetUser: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetUser", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetUser: function (sessionid, userid) {
            var paras = [sessionid, userid];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetUser", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RemoveUser: function (sessionid, userids) {
            var paras = [sessionid, userids];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RemoveUser", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SearchUser: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SearchUser", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SetUserGroup: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetUserGroup", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});