/**
 * Created with IntelliJ IDEA.
 * User: yan
 * Date: 13-11-20
 * Time: 下午5:15
 * To change this template use File | Settings | File Templates.
 */

define(["dojo/_base/declare", "dojo/_base/lang", "dojo/_base/array", "dojo/Evented",
        "rgzero/TrackerRealtimeUI", "roundgis/rtutils"],
    function (declare, lang, darray, Evented, TrackerRealtimeUI, rtutils) {
        return declare([Evented], {
            masterpane: undefined,
            currpane: undefined,
            watchstore: undefined,
            camera_store: undefined,
            polygon_store: undefined,
            dialog: undefined,

            constructor: function (spec) {
                lang.mixin(this, spec);
            },

            updateEvent: function (trackerevent) {
                (this.currpane) ? (this.currpane.update(trackerevent)) : undefined;
            },

            buildPane: function () {
                this.currpane = new TrackerRealtimeUI({
                    watch_store: this.watchstore,
                    camera_store: this.camera_store,
                    polygon_store: this.polygon_store,
                    "dialog": this.dialog
                });
                this.currpane.startup();
                this.masterpane.addChild(this.currpane);
            },

            clearPane: function () {
                rtutils.RemoveChildren(this.masterpane);
            }
        });
    });