define(["dojo/_base/declare", "dojo/on", "dojo/_base/lang", "dojo/_base/event", "dojo/_base/array",
        "dojo/dom-style", "dojo/has",
        "dojo/dom-construct", "dojo/cookie", "dojo/json", "dojo/string",
        "dijit/_WidgetBase", "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin", "dijit/form/Button", "dijit/layout/ContentPane",
        "dijit/Tooltip", "dstore/Memory",
        "dojox/charting/Chart", "dojox/charting/themes/Claro",
        "dojox/charting/plot2d/Lines",
        "dojox/charting/action2d/Tooltip", "dojox/charting/action2d/MouseZoomAndPan",
        "dojox/charting/action2d/TouchZoomAndPan", "dojox/charting/action2d/TouchIndicator",
        "dojox/charting/plot2d/Markers", "dojox/charting/axis2d/Default", "dojo/fx/easing",
        "dojox/charting/SimpleTheme",
        "roundgis/rtutils", "rgv/multi_lang",
        "dojo/text!" + BasicEnv.rgv_template_path + "/sensor_trend_block_ui2.html"],
    function (declare, on, lang, devent, darray, domstyle, d_has, domc,
              dcookie, djson, dstring, _WidgetBase,
              _TemplatedMixin, _WidgetsInTemplateMixin, Button, ContentPane,
              Tooltip, Memory, Chart, Claro, Lines,
              ChartTooltip, MouseZoomAndPan, TouchZoomAndPan, TouchIndicator, ChartMarkers,
              ChartDefault, ChartEasing, SimpleTheme,
              rtutils, multi_lang, TemplateStr) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
            templateString: TemplateStr,
            sensor_data_rows: undefined,
            sensor_mdl: undefined,
            chart_obj: undefined,
            ts_series: undefined,

            constructor: function (spec) {
                lang.mixin(this, spec);
            },

            postCreate: function () {
                this.inherited(arguments);
            },

            TranslateUI: function () {
            },

            startup: function () {
                this.inherited(arguments);
                this.TranslateUI();
            },

            SetHeight: function(height) {
                domstyle.set(this.container_node, "height", height);
            },

            SetWidth: function(width) {
                domstyle.set(this.container_node, "width", width);
            },

            SetRows: function(rows) {
                this.sensor_data_rows = rows;
            },

            Update: function () {
                var GetXLabelTextFunc = function (dt_obj1) {
                    return rtutils.pad2(dt_obj1.getHours()) + ":" + rtutils.pad2(dt_obj1.getMinutes());
                };

                if(!this.chart_obj) {
                    this.chart_obj = echarts.init(this.chart_node, 'light');
                }
                if (lang.isArray(this.sensor_data_rows)) {
                    var series_array = [];
                    for (var i = 0; i !== this.sensor_data_rows.length; ++i) {
                        var row = this.sensor_data_rows[i];
                        if (rtutils.IsValidNumber(row.val.val)) {
                            series_array.push(row.avg_val);
                        }
                    }
                    var x_labels = darray.map(this.ts_series, function (item, i) {
                        var dt_obj = rtutils.ts2date(item);
                        return GetXLabelTextFunc(dt_obj);
                    });

                    var option = {
                        title: {
                            text: this.sensor_mdl.name
                        },
                        tooltip: {trigger: "axis"},
                        dataZoom: {
                            type: "inside"
                        },
                        xAxis: {
                            data: x_labels
                        },
                        yAxis: {},
                        series: [
                            {
                                type: 'line',
                                data: series_array
                            }
                        ]
                    };
                    this.chart_obj.setOption(option);
                }
            }
        });
    });