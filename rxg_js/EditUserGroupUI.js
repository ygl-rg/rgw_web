/**
 * Created by mathgl on 10/31/14.
 */


define(["dojo/_base/declare", "dojo/on", "dojo/_base/lang", "dojo/_base/array", "dojo/Evented",
        "dojo/dom-class",
        "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
        "dijit/form/Button", "dijit/form/Select",
        "dijit/form/TextBox",
        "dojox/validate", "roundgis/rtutils",
        "dojo/text!"+BasicEnv.rxg_template_path+"/edit_user_group_ui.html"],
    function(declare, on, lang, darray, Evented, domclass, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
             Button,
             Select, TB,
             dx_validate,
             rtutils, TemplateStr) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented], {
            templateString: TemplateStr,
            userids: [],

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
                var grpid = parseInt(this.groupid_input_node.get("value"));
                if(rtutils.IsValidNumber(grpid)) {
                    this.emit("join_group", {"groupid": grpid, "userids": this.userids});
                }
                else {
                    this.hint_node.innerHTML = "id must be number";
                }
            },

            emitQuitEvent_: function(evt) {
                var grpid = parseInt(this.groupid_input_node.get("value"));
                if(rtutils.IsValidNumber(grpid)) {
                    this.emit("quit_group", {"groupid": grpid, "userids": this.userids});
                }
                else {
                    this.hint_node.innerHTML = "id must be number";
                }
            },

            resetUI: function() {
                this.hint_node.innerHTML = "";
                this.groupid_input_node.set("value", "");
            },

            setUserIds: function(userids) {
                this.userids = userids;
            },

            setHint: function(hint) {
                this.hint_node.innerHTML = hint;
            },

            resize: function() {
                this.inherited(arguments);
            }
        });
    });