/**
 * Created by mathgl on 17-2-16.
 */

define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        ModelingMeasurement: function(sessionid, arg) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, arg], method: "ModelingMeasurement", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});