/**
 * Created by mathgl on 12/16/14.
 */

define([
    'dojo/_base/declare', "dojo/dom-style",
    'dijit/Dialog',
    'dijit/_WidgetsInTemplateMixin',
    'dijit/form/Button',
    "dojo/text!"+BasicEnv.rgw_template_path+"/confirm_dialog_ui.html"
], function(declare,  dstyle, Dialog, _WidgetsInTemplateMixin, Button, template){
	return declare([Dialog, _WidgetsInTemplateMixin], {
		title: 'Confirm',
		templateString: template,

		constructor: function(options){
			if (options.message) {
				this.content = options.message;
			}
		},

		_onKey: function() {

		},

		startup: function() {
			this.inherited(arguments);
			dstyle.set(this.closeButtonNode, "display", "none");
		}

	});
});