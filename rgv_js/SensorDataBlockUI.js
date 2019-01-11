/**
 * Created by mathgl on 2/18/16.
 */

define(["dojo/_base/declare", "dojo/on", "dojo/_base/lang", "dojo/_base/event", "dojo/_base/array",
        "dojo/dom-style",
        "dojo/dom-construct", "dojo/cookie", "dojo/json",
        "dijit/_WidgetBase", "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin", "dijit/Toolbar", "dijit/form/Button", "dijit/layout/ContentPane",
        "dijit/Tooltip", "dstore/Memory",
        "roundgis/rtutils", "rgv/multi_lang",
        "dojo/text!" + BasicEnv.rgv_template_path + "/sensor_data_block_ui.html"],
    function (declare, on, lang, devent, darray, domstyle, domc,
              dcookie, djson, _WidgetBase,
              _TemplatedMixin, _WidgetsInTemplateMixin, Toolbar, Button, ContentPane,
              Tooltip, Memory,
              rtutils, multi_lang, TemplateStr) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
            templateString: TemplateStr,
            sensor_data: undefined,

            constructor: function (spec) {
                lang.mixin(this, spec);
            },

            postCreate: function () {
                this.inherited(arguments);
            },

            translateUI: function () {
                this.name_node.innerHTML = this.sensor_data.name || "";
                this.avg_log_url_node.innerHTML = rtutils.GetLangField(multi_lang.labels["view_log"], BasicEnv.lang);
                this.recent_hours_log_url_node.innerHTML = rtutils.GetLangField(multi_lang.labels["view_recent_hours"], BasicEnv.lang);
            },

            startup: function () {
                this.inherited(arguments);
                this.translateUI();
                this.Update();
                on(this.avg_log_url_node, "click", lang.hitch(this, function(evt) {
                    evt.preventDefault();
                    dcookie(BasicEnv.sensorid_for_log_view_cookie, djson.stringify([this.sensor_data.sensorid]),
                                {path: "/", expires: 1});
                    window.open(BasicEnv.curr_location+BasicEnv.sensor_mins_avg_log_url, BasicEnv.sensor_mins_avg_log_url);
                }));
                on(this.recent_hours_log_url_node, "click", lang.hitch(this, function(evt) {
                    evt.preventDefault();
                    dcookie(BasicEnv.sensorid_for_log_view_cookie, djson.stringify([this.sensor_data.sensorid]),
                                {path: "/", expires: 1});
                    window.open(BasicEnv.curr_location+BasicEnv.sensor_recent_hours_log_url, BasicEnv.sensor_recent_hours_log_url);
                }));
            },

            GetValUnit: function(sensor_no) {
                return this.sensor_data.val_unit;
            },

            GetValStr: function() {
                var precision = rtutils.IsValidNumber(this.sensor_data.val_precision)?this.sensor_data.val_precision:1;
                return this.sensor_data.val.toFixed(precision);
            },

            Update: function () {
                if(this.sensor_data.val !== undefined) {
                    this.data_node.innerHTML = this.GetValStr()+" "+this.GetValUnit(this.sensor_data.sensor_no);
                }
                else {
                    this.data_node.innerHTML = "N/A";
                }
            }
        });
    });