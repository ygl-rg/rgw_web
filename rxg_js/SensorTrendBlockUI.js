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
        "roundgis/rtutils", "rxg/multi_lang",
        "dojo/text!" + BasicEnv.rxg_template_path + "/sensor_trend_block_ui.html"],
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
            chart_obj: undefined,

            constructor: function (spec) {
                lang.mixin(this, spec);
            },

            postCreate: function () {
                this.inherited(arguments);
            },

            TranslateUI: function () {
                var first_row = this.sensor_data_rows[0];
                if(first_row) {
                    this.name_node.innerHTML = first_row.sensor_name || "";
                }
                else {
                    this.name_node.innerHTML = "";
                }
            },

            startup: function () {
                this.inherited(arguments);
                this.TranslateUI();
                this.scheme_obj = Claro.clone();
                // 1/8 smaller
                this.scheme_obj.markers = (new SimpleTheme({
                    markers: {
                        CIRCLE: "m-0.325,0 c0,-0.5 0.75,-0.5 0.75,0 m-0.75,0 c0,0.5 0.75,0.5 0.75,0"
                    }
                })).markers;
            },

            GetValStr: function() {
                return this.sensor_data.val.toFixed(2);
            },

            ClearChart: function () {
                this.chart_obj.removeAxis("x");
                this.chart_obj.removeAxis("y");
                this.chart_obj.removeSeries("trend");
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
                    return rtutils.pad2(dt_obj1.getHours()) + ":" + rtutils.pad2(dt_obj1.getMinutes())+":"+rtutils.pad2(dt_obj1.getSeconds());
                };

                var GetYLabelTextFunc = function (text, value, precision) {
                    return value.toFixed(2);
                };
                if(!this.chart_obj) {
                    this.chart_obj = new Chart(this.chart_node);
                    this.chart_obj.setTheme(this.scheme_obj);
                    this.chart_obj.addPlot("default", {
                        "type": "Lines",
                        markers: true,
                        tension: "X",
                        precision: 1});
                }

                this.ClearChart();
                if (lang.isArray(this.sensor_data_rows)) {
                    var series_tbls = darray.map(this.sensor_data_rows, lang.hitch(this, function (item, i) {
                        return {"x": i, "y": item.val};
                    }));
                    var x_labels = darray.map(this.sensor_data_rows, function (item, i) {
                        var dt_obj = rtutils.ts2date(item.cts);
                        return {"value": i, "text": GetXLabelTextFunc(dt_obj)};
                    });

                    this.chart_obj.addAxis('x', {
                        "labels": x_labels,
                        "htmlLabels": false,
                        majorTickStep: 5,
                        minorTickStep: 0
                    });

                    this.chart_obj.addAxis('y', {
                        "vertical": true, "htmlLabels": false,
                        fixLower: "major", fixUpper: "major",
                        labelFunc: GetYLabelTextFunc});

                    this.chart_obj.addSeries("trend", series_tbls, {
                        plot: "default",
                        stroke: {color: "red", 'width': 1}
                    });

                    if(d_has("android") || d_has("ios")) {
                        new TouchZoomAndPan(this.chart_obj, "default", {axis: "x"});
                    }
                    else {
                        new MouseZoomAndPan(this.chart_obj, "default", {axis: "x", maxScale: 10});
                    }
                    new TouchIndicator(this.chart_obj, "default", {
                        series: "trend", dualIndicator: false,
                        labelFunc: lang.hitch(this, function(v) {
                            return x_labels[v.x].text + " " + v.y.toFixed(2);
                        })
                    });
                }
                this.chart_obj.render();
            }
        });
    });