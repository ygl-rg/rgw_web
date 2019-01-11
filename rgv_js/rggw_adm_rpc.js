/**
 * Created by mathgl on 16-1-30.
 */


define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        AddDevice: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "AddDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SetDevice: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetDevice: function (sessionid, deviceid) {
            var paras = [sessionid, deviceid];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RemoveDevice: function (sessionid, deviceids) {
            var paras = [sessionid, deviceids];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RemoveDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        
        SearchDevice: function (sessionid, para) {
            var paras = [sessionid, para];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SearchDevice", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SetGroup: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetGroup", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SendCommand: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SendCommand", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SendRelay: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SendRelay", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetRecentTrackerRawLog: function (sessionid, trackerid, count) {
            var paras = [sessionid, trackerid, count];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetRecentTrackerRawLog", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        FindTrackerRawLog: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "FindTrackerRawLog", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetRecentQ06: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetRecentQ06", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        FindQ06: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "FindQ06", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        SetEEPROM: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "SetEEPROM", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetEEPROM: function (sessionid, arg) {
            var paras = [sessionid, arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetEEPROM", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});