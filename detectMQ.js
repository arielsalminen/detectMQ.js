/*! detectMQ.js v0.3
 * https://github.com/viljamis/detectMQ.js
 * http://viljamis.com
 *
 * Copyright (c) 2012-2013 @viljamis
 * Available under the MIT license
 */

/*jslint browser: true, sloppy: true, vars: true, plusplus: true, indent: 2 */

(function (win) {

  // Default settings
  var dmq_timeout,                      // Do not modify
    doc       = win.document,           // Do not modify
    dmq       = win.detect_mq || {},    // Do not modify
    live      = dmq.live || true,       // Boolean: Trigger on window resize, true or false
    threshold = dmq.threshold || 300,   // Integer: Threshold time before triggering (200ms+ recommended), in milliseconds
    callback  = dmq.callback || {},     // Do not modify

    // Get style
    getStyle = function (el, pseudo, cssprop) {
      return win.getComputedStyle(el, pseudo)[cssprop];
    },

    // Get value
    getValue = function () {
      var dmq_contentValue = getStyle(doc.body, ":after", "content");

      // Return to avoid errors
      if (dmq_contentValue === null) {
        return;
      }

      // Replace single and double quotes
      dmq_size = dmq_contentValue.replace(/['"]/g, "");

      // Init callback
      callback();
    };

  // Add event listeners, W3C event model
  if (doc.addEventListener && typeof (window.getComputedStyle) !== "undefined") {

    // On load
    win.addEventListener("load", getValue, false);
    if (live === true) {

      // On resize
      win.addEventListener("resize", function () {
        clearTimeout(dmq_timeout);
        dmq_timeout = setTimeout(getValue, threshold);
      }, false);

    }

  }

}(this));
