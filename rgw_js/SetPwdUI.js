/**
 * Created by mathgl on 8/20/14.
 */

define(["dojo/_base/declare", "dojo/on", "dojo/_base/lang", "dojo/_base/array", "dojo/dom-class",
        "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
        "dijit/form/Button", "dijit/form/Select",
        "dijit/form/TextBox",
        "dojox/validate", "roundgis/rtutils", "rgx/basic_user_rpc", "rgx/ConfirmDialog",
        "rgx/multi_lang",
        "dojo/text!"+BasicEnv.rgx_template_path+"/set_pwd_ui.html"],
    function(declare, on, lang, darray, domclass, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
             Button,
             Select, TB,
             dx_validate,
             rtutils, user_rpc, ConfirmDialog, multi_lang, TemplateStr) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
            templateString: TemplateStr,
            confirm_dialog: undefined,

            constructor: function(spec) {
                lang.mixin(this, spec);
            },

            postCreate: function() {
                on(this.set_pwd_btn_node, "click", lang.hitch(this, "handleSetPwdClick"));
                this.inherited(arguments);
            },

            startup: function() {
                this.inherited(arguments);
                this.confirm_dialog = new ConfirmDialog({title: "",
                                                         message: rtutils.GetLangField(multi_lang.msgs.change_password_confirm,
                                                                                       BasicEnv.lang),
                                                         onExecute: lang.hitch(this, "setPwd_"),
                                                         onCancel: lang.hitch(this, function() {
                                                             this.set_pwd_btn_node.set("disabled", false);
                                                         })
                                                        })
            },

            resetUI: function() {
                this.hint_node.innerHTML = "";
            },

            handleSetPwdClick: function(evt) {
                this.confirm_dialog.show();
            },

            setPwd_: function(evt) {
                var new_pwd = this.pwd_node.get("value");
                if(dojox.validate.isText(new_pwd, {"minlength": 2})) {
                    this.set_pwd_btn_node.set('disabled', true);
                    this.hint_node.innerHTML = "";
                    rtutils.Rpc2Deferred(user_rpc.SetPassword(BasicEnv.sessionid, new_pwd)).then(
                        lang.hitch(this, function(result) {
                            this.set_pwd_btn_node.set('disabled', false);
                            this.hint_node.innerHTML = result;
                        }),
                        lang.hitch(this, function(err) {
                            this.set_pwd_btn_node.set('disabled', false);
                            if(err.declaredType == "SessionExpired") {
                                this.hint_node.innerHTML = "please login";
                            }
                            else {
                                this.hint_node.innerHTML = "server error";
                            }
                        })
                    );
                }
                else {
                    this.hint_node.innerHTML = "password need at least three characters";
                }
            },

            resize: function() {
                this.inherited(arguments);
            }
        });
    });