/**
 * Created by mathgl on 2/18/16.
 */

define(["dojo/_base/declare", "dojo/on", "dojo/_base/lang", "dojo/_base/event", "dojo/_base/array",
        "dojo/dom-style",
        "dojo/dom-construct", "dojox/collections/Dictionary", "dijit/_WidgetBase", "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin", "dijit/Toolbar", "dijit/form/Button", "dijit/layout/ContentPane",
        "dijit/Tooltip", "dstore/Memory",
        "roundgis/rtutils", "rgv/SensorDataBlockUI", "rgv/multi_lang",
        "dojo/text!" + BasicEnv.rgv_template_path + "/device_data_ui.html"],
    function (declare, on, lang, devent, darray, domstyle, domc, Dictionary, _WidgetBase,
              _TemplatedMixin, _WidgetsInTemplateMixin, Toolbar, Button, ContentPane,
              Tooltip, Memory,
              rtutils, SensorDataBlockUI, multi_lang, TemplateStr) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
            templateString: TemplateStr,
            data_tbl: undefined,

            constructor: function (spec) {
                lang.mixin(this, spec);
            },

            postCreate: function () {
                this.inherited(arguments);
            },

            translateUI: function () {
            },

            startup: function () {
                this.inherited(arguments);
                this.translateUI();
                this.Update();
            },

            Update: function () {
                this.name_node.innerHTML = this.data_tbl.name || "";
                if(this.data_tbl.sensor_data_tbls.length > 0) {
                    domc.empty(this.blocks_node);
                    for(var i = 0; i!=this.data_tbl.sensor_data_tbls.length; ++i) {
                        var sensor_data = this.data_tbl.sensor_data_tbls[i];
                        //don't display switches sensor val which make no sense to users
                        if(sensor_data.sensor_no != "switches") {
                            domc.create("div", {"style": {"padding": "0.5em 0"}}, this.blocks_node);
                            var blk = new SensorDataBlockUI({"sensor_data": sensor_data});
                            blk.startup();
                            domc.place(blk.domNode, this.blocks_node, "last");
                        }
                    }
                }
            }
        });
    });