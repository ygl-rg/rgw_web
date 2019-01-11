/**
 * Created by mathgl on 17-6-30.
 */

define(["dojo/_base/declare", "dojo/on", "dojo/_base/lang", "dojo/_base/array", "dojo/Evented",
        "dojo/dom-class",
        "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
        "dijit/form/Button", "dijit/form/Select",
        "dijit/form/TextBox", "dijit/form/CheckBox",
        "dojox/validate", "roundgis/rtutils", "rgx/multi_lang",
        "dojo/text!"+BasicEnv.rgx_template_path+"/sys_cfg_ui.html"],
    function(declare, on, lang, darray, Evented, domclass, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
             Button,
             Select, TB, CB,
             dx_validate,
             rtutils, multi_lang, TemplateStr) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented], {
            templateString: TemplateStr,
            cfg_obj: [],

            constructor: function(spec) {
                lang.mixin(this, spec);
            },

            postCreate: function() {
                this.inherited(arguments);
            },

            TranslateUI: function () {
                this.auto_off_enabled_label.innerHTML = rtutils.GetLangField(multi_lang.labels["auto_off_enabled"], BasicEnv.lang);
            },

            startup: function() {
                this.inherited(arguments);
                this.TranslateUI();
                on(this.ok_btn_node, "click", lang.hitch(this, "EmitSetEvent_"));
            },

            CheckInput: function(val_str, hint_str) {
                if(val_str.length < 1) {
                    this.SetHint(hint_str);
                    return false;
                }
                else {
                    return true;
                }
            },

            EmitSetEvent_: function(evt) {
                this.emit("set_sys", {"data" :{
                    "auto_off_enabled": this.auto_off_enabled_checkbox_node.get("checked")?"1":"0"
                }});
            },

            ResetUI: function() {
                this.SetHint("");
                this.auto_off_enabled_checkbox_node.set("checked", this.cfg_obj.auto_off_enabled=="1");
            },

            SetCfg: function(cfg_obj) {
                this.cfg_obj = cfg_obj;
            },

            SetHint: function(hint) {
                this.hint_node.innerHTML = hint;
            },

            resize: function() {
                this.inherited(arguments);
            }
        });
    });