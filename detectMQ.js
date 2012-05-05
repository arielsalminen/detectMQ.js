/*! detectMQ.js v0.2 by @viljamis */
(function (win) {

  // Default settings
  var dmq_timeout,
    doc       = win.document,
    dmq       = win.detect_mq || {},
    live      = dmq.live || true,
    threshold = dmq.threshold || 200,
    callback  = dmq.callback || {},

    // Get style
    getStyle = function (el, pseudo, cssprop) {
      return win.getComputedStyle(el, pseudo)[cssprop];
    },

    // Get value
    getValue = function () {
      var dmq_contentValue = getStyle(doc.body, ":after", "content");
      dmq_size = dmq_contentValue.replace(/['"]/g, "");
      callback();
    };

  // Add event listeners
  win.addEventListener("load", getValue, false);
  if (live === true) {
    win.addEventListener("resize", function () {
      clearTimeout(dmq_timeout);
      dmq_timeout = setTimeout(getValue, threshold);
    }, false);
  }

}(this));
