/**
 * Created by mathgl on 17-6-15.
 */

define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        AddDevice: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "AddDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SetDevice: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetDevice: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetDeviceNId: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetDeviceNId", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RemoveDevice: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RemoveDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        ResetDevice: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "ResetDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RebootDevice: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RebootDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SearchDevice: function (para) {
            var paras = [para];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SearchDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetDeviceOpLog: function (para) {
            var paras = [para];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetDeviceOpLog", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetDeviceOpErrorCount: function (para) {
            var paras = [para];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetDeviceOpErrorCount", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});