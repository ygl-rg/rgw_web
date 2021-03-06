/**
 * Created by mathgl on 10/7/14.
 */


define(["dojo/_base/declare", "dojo/on", "dojo/_base/lang", "dojo/_base/array", "dojo/Evented",
        "dojo/dom-class",
        "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
        "dijit/form/Button", "dijit/form/Select",
        "dijit/form/TextBox",
        "dojox/validate", "roundgis/rtutils",
        "dojo/text!"+BasicEnv.rgv_template_path+"/edit_groupid_ui.html"],
    function(declare, on, lang, darray, Evented, domclass, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
             Button,
             Select, TB,
             dx_validate,
             rtutils, TemplateStr) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented], {
            templateString: TemplateStr,
            trackerids: [],

            constructor: function(spec) {
                lang.mixin(this, spec);
            },

            postCreate: function() {
                this.inherited(arguments);
                on(this.join_btn_node, "click", lang.hitch(this, "emitJoinEvent_"));
                on(this.quit_btn_node, "click", lang.hitch(this, "emitQuitEvent_"));
            },

            startup: function() {
                this.inherited(arguments);
            },

            emitJoinEvent_: function(evt) {
                var grpidstr = this.groupid_input_node.get("value");
                if(dojox.validate.isText(grpidstr, {minlength: 24, maxlength: 32})) {
                    this.emit("join_group", {"groupid": grpidstr, "trackerids": this.trackerids});
                }
                else {
                    this.hint_node.innerHTML = "group id incorrect";
                }
            },

            emitQuitEvent_: function(evt) {
                var grpidstr = this.groupid_input_node.get("value");
                if(dojox.validate.isText(grpidstr, {minlength: 24, maxlength: 32})) {
                    this.emit("quit_group", {"groupid": grpidstr, "trackerids": this.trackerids});
                }
                else {
                    this.hint_node.innerHTML = "group id incorrect";
                }
            },

            resetUI: function() {
                this.hint_node.innerHTML = "";
                this.groupid_input_node.set("value", "");
            },

            setTrackerIds: function(trackerids) {
                this.trackerids = trackerids;
            },

            setHint: function(hint) {
                this.hint_node.innerHTML = hint;
            },

            resize: function() {
                this.inherited(arguments);
            }
        });
    });