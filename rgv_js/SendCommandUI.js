/**
 * Created by gelin yan on 1/1/15.
 */

define(["dojo/_base/declare", "dojo/on", "dojo/_base/lang", "dojo/_base/array", "dojo/Evented",
        "dojo/dom-class",
        "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
        "dijit/form/Button", "dijit/form/Select",
        "dijit/form/TextBox", "dijit/form/CheckBox", "dijit/form/Textarea",
    "dojox/validate", "roundgis/rtutils",
    "dojo/text!"+BasicEnv.rgv_template_path+"/send_command_ui.html"],
    function(declare, on, lang, darray, Evented, domclass, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
             Button,
             Select, TB, CheckBox, Textarea,
             dx_validate,
             rtutils, TemplateStr) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented], {
            templateString: TemplateStr,
            trackerid: [],

            constructor: function(spec) {
                lang.mixin(this, spec);
            },

            postCreate: function() {
                this.inherited(arguments);
                on(this.send_btn_node, "click", lang.hitch(this, "emitEvent_"));
            },

            startup: function() {
                this.inherited(arguments);
            },

            emitEvent_: function(evt) {
                var valstr = this.command_input_node.get("value");
                if(valstr.length > 5) {
                    this.emit("send_command", {"command": valstr,
                                               "trackerid": this.trackerid,
                                               "is_binary": this.binary_checkbox_node.get("checked"),
                                               "is_passthrough": this.passthrough_checkbox_node.get("checked")});
                }
                else {
                    this.hint_node.innerHTML = "command format incorrect";
                }
            },

            resetUI: function() {
                this.hint_node.innerHTML = "";
                this.command_input_node.set("value", "");
            },

            setTrackerId: function(trackerid) {
                this.trackerid = trackerid;
            },

            setHint: function(hint) {
                this.hint_node.innerHTML = hint;
            },

            resize: function() {
                this.inherited(arguments);
            }
        });
    });
