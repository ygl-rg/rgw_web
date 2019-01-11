//
// Copyright (c) 2012, Oliver Lade
// All rights reserved.
//
// This shimmy dialog box extends the standard dijit.Dialog box with an internal
// IFrame shim that accurately tracks the size and position of the dialog box.
// It is particularly useful for displaying fully functional dialog boxes over
// embedded Google Earth plugin frames.
//
// Note that the underlay is not shimmed in order to preserve interactivity.
// This could be added as an option if
//
// To use it:
//   (1) place the shimmy directory as a child of the dojo directory;
//   (2) add the shimmy package to data-dojo-config;
//   (3) use the type 'shimmy/Dialog' instead of 'dijit/Dialog'.
//
// Thanks to Roman Nurik for his Google Earth shim sample:
// http://earth-api-samples.googlecode.com/svn/trunk/demos/customcontrols/index.html
//
//	The Shim Dialog is released under to following two licenses:
//
//	1 - The 'New' BSD License		(http://trac.dojotoolkit.org/browser/dojo/trunk/LICENSE#L13)
//	2 - The Academic Free License	(http://trac.dojotoolkit.org/browser/dojo/trunk/LICENSE#L43)
//
//  o/`
// This, my shim,
// Is there to please
// Strip the hole
// Fill them all
//  o/`
//
define([
    'dojo/_base/declare',
    'dijit/Dialog',
    'dojo/dom-style'
], function (declare, Dialog, domStyle) {
    return declare([Dialog], {

        // The IFrame shim used as a foundation for the dialog
        // Its ID is set to shim_<dialog_id> if you need a reference
        _shim:null,

        show:function () {
            // summary
            //		Display the dialog on its shim.
            // Show the dialog
            this.inherited(arguments);
            // Set up the shim
            this._createShim();
            // Hook into the drag events to update the shim
            this.connect(this._moveable, "onMoved", function () {
                this._updateShim();
            });
            // Simulate a drag end event to solidify connection
            this._endDrag();
        },

        hide:function () {
            // summary
            //		Hide the dialog and destroy the shim.
            this.inherited(arguments);
            dojo.destroy(this._shim);
        },

        _createShim:function () {
            // summary
            //		Create the shim element based on the dialog style.
            this._shim = document.createElement('iframe');
            this._shim.id = "shim_" + this.id;
            this._shim.style.position = 'absolute';
            this._shim.style.zIndex = domStyle.get(this.domNode, 'z-index') - 1;
            this._shim.scrolling = 'no';
            this._shim.frameBorder = 0;
            this._shim.src = (navigator.userAgent.indexOf('MSIE 6') >= 0) ?
                '' : 'javascript:void(0);';
            document.body.appendChild(this._shim);
            // Position the shim
            this._updateShim();
        },

        _updateShim:function () {
            // summary
            //		Set the shim's position and dimensions to those of the dialog.
            this._shim.style.left = domStyle.get(this.domNode, 'left') + 'px';
            this._shim.style.top = domStyle.get(this.domNode, 'top') + 'px';
            this._shim.width = domStyle.get(this.domNode, 'width') +
                domStyle.get(this.domNode, 'border-left-width') +
                domStyle.get(this.domNode, 'border-right-width') + 'px';
            this._shim.height = domStyle.get(this.domNode, 'height') +
                domStyle.get(this.domNode, 'border-top-width') +
                domStyle.get(this.domNode, 'border-bottom-width') + 'px';
        },

        resize: function() {
            this.inherited(arguments);
            if(!this._shim) {
                this._createShim();
            }
            this._updateShim();
        },

        _endDrag:function () {
            // summary
            //		When a drag is completed, update the dialog and its shim.
            this.inherited(arguments);
            this._updateShim();
        }
    });
    /* end declare() */
});
/* end define() */