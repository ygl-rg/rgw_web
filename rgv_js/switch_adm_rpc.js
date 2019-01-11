/**
 * Created by mathgl on 16-2-13.
 */

define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        AddSwitch: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "AddSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SetSwitch: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetSwitch: function (sessionid, deviceid) {
            var paras = [sessionid, deviceid];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RemoveSwitch: function (sessionid, deviceids) {
            var paras = [sessionid, deviceids];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RemoveSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },
        
        SearchSwitch: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SearchSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});