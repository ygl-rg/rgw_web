/**
 * Created by mathgl on 4/7/15.
 */

define(["dojo/_base/array", "dojo/dom", "dojo/dom-style", "dojo/dom-construct",
        "dojo/dom-geometry", "dojo/Deferred"],
    function (darray, dom, doms, domc, dgeom, Deferred) {
        return {
            EmptyDeferred: function () {
                var d = new Deferred();
                setTimeout(function () {
                    d.resolve(false);
                }, 0);
                return d.promise;
            }
        };
    });