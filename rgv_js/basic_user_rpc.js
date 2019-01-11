/**
 * Created by mathgl on 16/4/8.
 */

define(["dojo/request/xhr", "dojo/json"], function(xhr, json) {
    return {
        URL: "{{ url }}",

        SetPassword: function(sessionid, new_pwd) {
            return xhr(this.URL, {data: json.stringify({params:[sessionid, new_pwd], method: "SetPassword", id: 1}),
                handleAs: "json", method: 'POST'});
        }
    };
});