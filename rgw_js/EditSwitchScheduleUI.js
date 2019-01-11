define(["dojo/_base/declare", "dojo/on", "dojo/_base/lang", "dojo/_base/array", "dojo/Evented",
        "dojo/dom-class",
        "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
        "dijit/form/Button", "dijit/form/Select",
        "dijit/form/TextBox",
        "dojox/validate", "roundgis/rtutils", "rgw/multi_lang",
        "dojo/text!"+BasicEnv.rgw_template_path+"/edit_switch_schedule_ui.html"],
    function(declare, on, lang, darray, Evented, domclass, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
             Button,
             Select, TB,
             dx_validate,
             rtutils, multi_lang, TemplateStr) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented], {
            templateString: TemplateStr,
            switchids: [],

            constructor: function(spec) {
                lang.mixin(this, spec);
            },

            postCreate: function() {
                this.inherited(arguments);
            },

            TranslateUI: function () {
                this.start_time_label.innerHTML = rtutils.GetLangField(multi_lang.labels["start"], BasicEnv.lang);
                this.stop_time_label.innerHTML = rtutils.GetLangField(multi_lang.labels["stop"], BasicEnv.lang);
                this.hour_minute_label.innerHTML = rtutils.GetLangField(multi_lang.labels["hour_minute"], BasicEnv.lang);
                this.working_duration_label.innerHTML = rtutils.GetLangField(multi_lang.labels["working_duration"], BasicEnv.lang);
                this.mins_label.innerHTML = rtutils.GetLangField(multi_lang.labels["mins"], BasicEnv.lang);
                this.secs_label.innerHTML = rtutils.GetLangField(multi_lang.labels["secs"], BasicEnv.lang);
            },

            startup: function() {
                this.inherited(arguments);
                this.TranslateUI();
                on(this.ok_btn_node, "click", lang.hitch(this, "EmitSetEvent_"));
                on(this.start_time_img_node, "click", lang.hitch(this, function(evt) {
                    WdatePicker({dateFmt:'yyyy/MM/dd', lang:'en', el: this.start_time_input_node.id, readOnly: true});
                }));
                on(this.stop_time_img_node, "click", lang.hitch(this, function(evt) {
                    WdatePicker({dateFmt:'yyyy/MM/dd', lang:'en', el: this.stop_time_input_node.id, readOnly: true});
                }));
                on(this.hh_mm_img_node, "click", lang.hitch(this, function(evt) {
                    WdatePicker({dateFmt:'HH:mm', lang:'en', el: this.hh_mm_input_node.id, readOnly: true});
                }));
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

            CheckWorkingSecondsInput: function(val_str1, val_str2, hint_str1, hint_str2) {
                var working_seconds = 0;
                if(val_str1.length > 0) {
                    working_seconds += parseInt(val_str1, 10)*60;
                }

                if(val_str2.length > 0) {
                    working_seconds += parseInt(val_str2, 10);
                }

                if(rtutils.IsValidNumber(working_seconds)) {
                    if((working_seconds < 15) || (working_seconds > 86400*15)) {
                        this.SetHint(hint_str2);
                        return undefined;
                    }
                    return working_seconds;
                }
                else {
                    this.SetHint(hint_str1);
                    return undefined;
                }
            },

            EmitSetEvent_: function(evt) {
                var res1 = this.CheckInput(this.start_time_input_node.get("value"), "missing start date");
                var res2 = this.CheckInput(this.stop_time_input_node.get("value"), "missing stop date");
                var res3 = this.CheckInput(this.hh_mm_input_node.get("value"), "missing hour minute");
                var res4 =this.CheckWorkingSecondsInput(this.mins_input_node.get("value"),
                                                        this.secs_input_node.get("value"),
                                                        "number only",
                                                        "working duration is out of range");
                if(res1 && res2 && res3 && (res4 !== undefined)) {
                    var strs = this.hh_mm_input_node.get("value").split(":");
                    this.emit("set_schedule", {"data": {"local_start_time": this.start_time_input_node.get("value").split("/").join("-"),
                                               "local_stop_time": this.stop_time_input_node.get("value").split("/").join("-"),
                                               "hour": parseInt(strs[0], 10), "minute": parseInt(strs[1], 10),
                                               "working_seconds": res4,
                                               "switchids": this.switchids}});
                }
            },

            ResetUI: function() {
                this.SetHint("");
                /*
                this.start_time_input_node.set("value", "");
                this.stop_time_input_node.set("value", "");
                this.hh_mm_input_node.set("value", "");
                this.secs_input_node.set("value", "");
                this.mins_input_node.set("value", "");
                */
            },

            SetSwitchIds: function(objids) {
                this.switchids = objids;
            },

            SetHint: function(hint) {
                this.hint_node.innerHTML = hint;
            },

            resize: function() {
                this.inherited(arguments);
            }
        });
    });