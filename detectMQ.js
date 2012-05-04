/*! detectMQ.js v0.1 by @viljamis */
(function (win) {

  var dmq_timeout;

  var dmq         = win.detect_mq || {},
    live          = dmq.live || true,
    threshold     = dmq.threshold || 300,
    doc           = win.document,
    callback      = dmq.callback || {};

  var getValues = function () {
      dmq_contentValue = win.getComputedStyle(doc.body, ":after").getPropertyValue("content");
      dmq_size = dmq_contentValue.replace(/['"]/g, '');
      callback();
    },

    complete = false,

    initDmq = function () {
      if (complete) {
        return;
      }
      complete = true;
      getValues();
    };

  win.addEventListener("load", initDmq, false);
  if (live === true) {
    win.addEventListener("resize", function () {
      clearTimeout(dmq_timeout);
      dmq_timeout = setTimeout(getValues);
    }, false);
  }

}(this));
