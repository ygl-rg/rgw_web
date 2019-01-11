/**
 * Created by mathgl on 16/4/26.
 */

define(["dojo/_base/declare", "dojo/on", "dojo/_base/lang", "dojo/_base/array", "dojo/Evented",
        "dojo/dom-class",
        "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
        "dijit/form/Button", "dijit/form/Select",
        "dijit/form/TextBox",
        "dojox/validate", "roundgis/rtutils",
        "dojo/text!"+BasicEnv.rgy_template_path+"/edit_sensor_usage_info_ui.html"],
    function(declare, on, lang, darray, Evented, domclass, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
             Button,
             Select, TB,
             dx_validate,
             rtutils, TemplateStr) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented], {
            templateString: TemplateStr,
            sensorids: [],

            constructor: function(spec) {
                lang.mixin(this, spec);
            },

            postCreate: function() {
                this.inherited(arguments);
                on(this.set_btn_node, "click", lang.hitch(this, "emitSetEvent_"));
                on(this.time_input_node, "click", function(evt) {
                    WdatePicker({dateFmt:'yyyy-MM-dd HH:mm', lang:'en'});
                });
            },

            startup: function() {
                this.inherited(arguments);
            },

            emitSetEvent_: function(evt) {
                var val_str = this.time_input_node.get("value");
                if(val_str.length <=5) {
                    this.SetHint("time incorrect");
                    return undefined;
                }
                var max_usage_time = Number.parseInt(this.max_usage_time_input_node.get("value"), 10);
                if(Number.isNaN(max_usage_time)) {
                    this.SetHint("max usage time must be number");
                    return undefined;
                }
                this.emit("set_usage_info", {"usage_start_ts": rtutils.date2ts(new Date(val_str)), 
                                             "max_usage_time": max_usage_time, 
                                             "sensorids": this.sensorids,
                                             "remark": this.remark_input_node.get("value")});
            },

            ResetUI: function() {
                this.SetHint("");
                this.time_input_node.set("value", "");
                this.max_usage_time_input_node.set("value", "");
                this.remark_input_node.set("value", "");
            },

            SetSensorIds: function(sensorids) {
                this.sensorids = sensorids;
            },

            SetHint: function(hint) {
                this.hint_node.innerHTML = hint;
            },

            resize: function() {
                this.inherited(arguments);
            }
        });
    });