/**
 * Created by mathgl on 8/21/14.
 */


define(["dojo/_base/declare", "dojo/on", "dojo/_base/lang", "dojo/_base/array", "dojo/dom-class",  "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
    "dijit/layout/ContentPane", "dijit/form/Button", "dijit/form/Select",
    "dijit/form/TextBox", "dijit/Dialog",
    "dgrid/OnDemandGrid", "dgrid/Selection",  "dgrid/Keyboard", "dojo/store/Memory",
    "dojox/validate", "dojox/validate/web", "roundgis/rtutils",
    "rgx/SetPwdUI",
    "dojo/text!"+BasicEnv.rgx_template_path+"/user_conf_ui.html"],
    function(declare, on, lang, darray, domclass, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
             ContentPane, Button,
             Select, TB, Dialog, Grid, Selection,  Keyboard, Memory,
             dx_validate, dx_validate_web,
             rtutils, SetPwdUI, TemplateStr) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
            templateString: TemplateStr,
            set_pwd_dialog: undefined,
            set_pwd_ui: undefined,
            dialog: undefined,

            constructor: function(spec) {
                lang.mixin(this, spec);
            },

            postCreate: function() {
                on(this.set_pwd_btn_node, "click", lang.hitch(this, "openSetPwdUI_"));
                this.inherited(arguments);
            },

            startup: function() {
                this.inherited(arguments);
                this.set_pwd_ui = new SetPwdUI();
                this.set_pwd_ui.startup();
            },

            openSetPwdUI_: function(evt) {
                this.set_pwd_ui.resetUI();
                rtutils.AttachDialog(this.dialog, this.set_pwd_ui);
                this.dialog.set("title", "Change Password");
                this.dialog.show();
            },

            resize: function() {
                this.inherited(arguments);
            }
        });
    });