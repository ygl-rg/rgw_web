/**
 * Created with IntelliJ IDEA.
 * User: ygl
 * Date: 13-6-10
 * Time: 下午5:54
 * To change this template use File | Settings | File Templates.
 */
//contains some useful functions

define(["dojo/_base/array", "dojo/dom", "dojo/dom-style", "dojo/dom-construct", "dojo/dom-geometry"],
    function (darray, dom, doms, domc, dgeom) {
        return {
            RpcFilter: function (jsonval) {
                if (jsonval.error) {
                    throw jsonval.error;
                }
                else {
                    return jsonval.result;
                }
            },

            Rpc2Deferred: function (promiseobj) {
                var that = this;
                return promiseobj.then(
                    function (jsonval) {
                        return that.RpcFilter(jsonval);
                    },
                    function (err) {
                        throw err;
                    }
                );
            },

            ShowStandby: function (standbyObj, target) {
                if (target) {
                    standbyObj.target = target;
                }
                standbyObj.show();
            },

            HideStandby: function (standbyObj, target) {
                standbyObj.hide();
                if (target) {
                    standbyObj.target = target;
                }
            },

            pad2: function (n) {
                return (n < 10) ? ('0' + n) : (n);
            },

            GetTimezoneOffset: function () {
                return 0 - (new Date()).getTimezoneOffset() / 60;
            },


            //format: year/month/day hour:minute:second
            DT2Str: function(dt_obj) {
                if (dt_obj) {
                    return dt_obj.getFullYear() + "/" + this.pad2(dt_obj.getMonth() + 1) + "/" + this.pad2(dt_obj.getDate()) +
                        " " + this.pad2(dt_obj.getHours()) + ":" + this.pad2(dt_obj.getMinutes()) + ":" + this.pad2(dt_obj.getSeconds());
                }
                else {
                    return "";
                }
            },

            //format: year/month/day hour:minute
            DT2Str2: function (dt_obj) {
                return (dt_obj !== undefined)?(dt_obj.getFullYear() + "/" + this.pad2(dt_obj.getMonth() + 1) + "/" + this.pad2(dt_obj.getDate()) +
                    " " + this.pad2(dt_obj.getHours()) + ":" + this.pad2(dt_obj.getMinutes())):"";
            },

            //hour:minute:second
            DT2Str3: function(dt_obj) {
                return (dt_obj !== undefined)?this.pad2(dt_obj.getHours()) + ":" + this.pad2(dt_obj.getMinutes())+":"+this.pad2(dt_obj.getSeconds()):"";
            },

            //format: month/day hour:minute
            DT2Str4: function(dt_obj) {
                return (dt_obj !== undefined)?(this.pad2(dt_obj.getMonth() + 1) + "/" + this.pad2(dt_obj.getDate()) +
                    " " + this.pad2(dt_obj.getHours()) + ":" + this.pad2(dt_obj.getMinutes())):"";
            },

            //format year/month/day
            Date2Str: function (dt_obj) {
                return dt_obj.getFullYear() + "/" + this.pad2(dt_obj.getMonth() + 1) + "/" + this.pad2(dt_obj.getDate());
            },
            
            GetYearMonth: function(dt_obj) {
                return [dt_obj.getFullYear(), dt_obj.getMonth()+1];
            },

            ts2date: function (timestamp) {
                return (parseFloat(timestamp) !== NaN) ? (new Date(timestamp * 1000)) : undefined;
            },

            date2ts: function(dt_obj) {
                return dt_obj.getTime()/1000;
            },

            //seconds -> hh:mm:ss
            seconds2hhmmss: function (seconds) {
                var temp = parseInt(seconds, 10);
                var hour = Math.floor(temp / 3600);
                var minute = Math.floor(temp / 60) % 60;
                var second = temp % 60;
                return ((hour < 10) ? "0" : "") + hour + ":" +
                    ((minute < 10) ? "0" : "") + minute + ":" +
                    ((second < 10) ? "0" : "") + second;
            },
            
            //seconds -> hh:mm
            seconds2hhmm: function (seconds) {
                var temp = parseInt(seconds, 10);
                var hour = Math.floor(temp / 3600);
                var minute = Math.floor(temp / 60) % 60;
                return ((hour < 10) ? "0" : "") + hour + ":" +
                    ((minute < 10) ? "0" : "") + minute;
            },

            RemoveAllChildren: function (pane) {
                darray.forEach(pane.getChildren(), function (child) {
                    pane.removeChild(child);
                });
            },

            GetLangField: function (obj, lang) {
                if (obj) {
                    if (lang in obj && obj[lang]) {
                        return obj[lang];
                    }
                    else {
                        return obj["en"];
                    }
                }
                else {
                    return undefined;
                }

            },

            AttachDialog: function (dialog, ui) {
                this.RemoveAllChildren(dialog);
                dialog.addChild(ui);
                return dialog;
            },

            ReloadWhenExpired: function (err_obj) {
                if (err_obj.declaredType == "SessionExpired") {
                    window.location.reload(true);
                }
                else {
                    return err_obj;
                }
            },

            IsValidNumber: function(val) {
                if(typeof val == "number") {
                    return (!isNaN(val));
                }
                else {
                    return false;
                }
            },

            Mixin: function(dest, src, field_names) {
                if(!dest) {
                    dest = {};
                }
                for(var i = 0; i!=field_names.length; ++i) {
                    dest[field_names[i]] = src[field_names[i]];
                }
                return dest;
            },

            ShowMsgBox: function(dialog_obj, str_obj) {
                dialog_obj.set("content", str_obj);
                dialog_obj.show();
            }
        };
    });
