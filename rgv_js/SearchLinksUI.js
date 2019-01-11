/**
 * Created by mathgl on 11/7/14.
 */

define(["dojo/_base/declare", "dojo/on", "dojo/_base/lang", "dojo/_base/array", "dojo/dom-class",
        "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
        "dijit/form/Button", "dijit/form/Select",
        "dijit/form/TextBox", "dijit/Tooltip",
    "dojox/validate", "roundgis/rtutils", "rgyabby/multi_lang",
    "dojo/text!"+BasicEnv.rgy_template_path+"/search_links_ui.html"],
    function(declare, on, lang, darray, domclass, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
             Button,
             Select, TB, Tooltip,
             dx_validate,
             rtutils, multi_lang, TemplateStr) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
            templateString: TemplateStr,
            trackerid: undefined,

            constructor: function(spec) {
                lang.mixin(this, spec);
            },

            postCreate: function() {
                this.inherited(arguments);
                this.links = {
                    "trace_search_gmap": BasicEnv.curr_location+"app/tracelog/gmap",
                    "mileage_search": BasicEnv.curr_location+"app/movinglog",
                    "parking_search": BasicEnv.curr_location+"app/parkinglog",
                    "image_event_log": BasicEnv.curr_location+"ui/log/imageevent",
                    "engine_stats_log": BasicEnv.curr_location+"app/enginelog",
                    "acc_stats_app": BasicEnv.curr_location+"app/acclog"
                };
            },

            startup: function() {
                this.inherited(arguments);
                this.trace_search_gmap_link_node.href = this.links.trace_search_gmap;
                this.mileage_search_link_node.href = this.links.mileage_search;
                this.parking_search_link_node.href = this.links.parking_search;
                this.image_event_log_ui_link_node.href = this.links.image_event_log;
                this.engine_stats_log_ui_link_node.href = this.links.engine_stats_log;
                this.acc_stats_app_link_node.href = this.links.acc_stats_app;
                new Tooltip({connectId: this.trace_search_gmap_link_node,
                             label: rtutils.getLangField(multi_lang.tooltips.trace_search_link,
                                                         BasicEnv.lang)+"(GMap)"});
                new Tooltip({connectId: this.mileage_search_link_node,
                             label: rtutils.getLangField(multi_lang.tooltips.mileage_search_link,
                                                         BasicEnv.lang)});
                new Tooltip({connectId: this.parking_search_link_node,
                             label: rtutils.getLangField(multi_lang.tooltips.parking_search_link,
                                                         BasicEnv.lang)});
                new Tooltip({connectId: this.image_event_log_ui_link_node,
                             label: rtutils.getLangField(multi_lang.tooltips.image_event_log_ui_link,
                                                         BasicEnv.lang)});
                new Tooltip({connectId: this.engine_stats_log_ui_link_node,
                             label: rtutils.getLangField(multi_lang.tooltips.engine_stats_log_ui_link,
                                                         BasicEnv.lang)});
                new Tooltip({connectId: this.acc_stats_app_link_node,
                             label: rtutils.getLangField(multi_lang.tooltips.acc_stats_app_link,
                                                         BasicEnv.lang)});
            },

            SetTrackerId: function(trackerid) {
                this.trackerid = trackerid;
                var para = "?trackerid="+this.trackerid;
                this.trace_search_gmap_link_node.href = this.links.trace_search_gmap+para;
                this.mileage_search_link_node.href = this.links.mileage_search+para;
                this.parking_search_link_node.href = this.links.parking_search+para;
                this.image_event_log_ui_link_node.href = this.links.image_event_log+para;
                this.engine_stats_log_ui_link_node.href = this.links.engine_stats_log+para;
                this.acc_stats_app_link_node.href = this.links.acc_stats_app+para;
            }
        });
    });