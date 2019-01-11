/**
 * Created by mathgl on 16-9-19.
 */

define(["dojo/_base/declare", "dojo/on", "dojo/_base/lang", "dojo/_base/array", "dojo/Evented",
        "dojo/dom-class",
        "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
        "dijit/form/Button", "dijit/form/Select",
        "dijit/form/TextBox",
        "dojox/validate", "roundgis/rtutils",
        "dojo/text!"+BasicEnv.rxg_template_path+"/edit_groupid_ui.html"],
    function(declare, on, lang, darray, Evented, domclass, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
             Button,
             Select, TB,
             dx_validate,
             rtutils, TemplateStr) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented], {
            templateString: TemplateStr,
            data: undefined,

            constructor: function(spec) {
                lang.mixin(this, spec);
            },

            postCreate: function() {
                this.inherited(arguments);
                on(this.join_btn_node, "click", lang.hitch(this, "EmitJoinEvent_"));
                on(this.quit_btn_node, "click", lang.hitch(this, "EmitQuitEvent_"));
            },

            startup: function() {
                this.inherited(arguments);
            },

            EmitJoinEvent_: function(evt) {
                var grpid = parseInt(this.groupid_input_node.get("value"));
                if(rtutils.IsValidNumber(grpid)) {
                    this.emit("join_group", {"groupid": grpid, "data": this.data});
                }
                else {
                    this.SetHint("group id incorrect");
                }
            },

            EmitQuitEvent_: function(evt) {
                var grpid = parseInt(this.groupid_input_node.get("value"));
                if(rtutils.IsValidNumber(grpid)) {
                    this.emit("quit_group", {"groupid": grpid, "data": this.data});
                }
                else {
                    this.SetHint("group id incorrect");
                }
            },

            ResetUI: function() {
                this.SetHint("");
                this.groupid_input_node.set("value", "");
            },

            SetData: function(data) {
                this.data = data;
            },

            SetHint: function(hint) {
                this.hint_node.innerHTML = hint;
            },

            resize: function() {
                this.inherited(arguments);
            }
        });
    });