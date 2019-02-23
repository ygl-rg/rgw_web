define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        OpenSwitch: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "OpenSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        CloseSwitch: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "CloseSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetSwitch: function(arg) {
            return xhr(this.URL, {data: json.stringify({params:[arg], method: "GetSwitch", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        ExportSensorMinsAvgLog: function(arg) {
            return xhr(this.URL, {data: json.stringify({params:[arg], method: "ExportSensorMinsAvgLog", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        FindSensorRecentHourAvgLog: function(arg) {
            return xhr(this.URL, {data: json.stringify({params:[arg], method: "FindSensorRecentHourAvgLog", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        AddSchedule: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "AddSchedule", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        ListSchedule: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "ListSchedule", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        RemoveSchedule: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "RemoveSchedule", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetSwitchOnDetail: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetSwitchOnDetail", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        GetSensor: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "GetSensor", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        FindSensorMinsAvgLog: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "FindSensorMinsAvgLog", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        ListSwitchMonthlyUsage: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "ListSwitchMonthlyUsage", id: 1}),
                handleAs: "json", method: 'POST'});
        },

        ExportSwitchMonthlyUsage: function (arg) {
            var paras = [arg];
            return xhr(this.URL, {data: json.stringify({params: paras, method: "ExportSwitchMonthlyUsage", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});