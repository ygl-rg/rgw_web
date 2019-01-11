/**
 * Created by mathgl on 16-7-31.
 */


define(["dojo/_base/array", "dojo/dom", "dojo/dom-style", "dojo/dom-construct", "dojo/dom-geometry"],
    function (darray, dom, doms, domc, dgeom) {
        return {
            GetGreenHouseStr: function() {
                return "/imgs/green_house.png";
            },

            GetGreenHouseTbl: function () {
                return {url: this.GetGreenHouseStr()};
            }
        };
    });