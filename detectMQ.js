// @misteroneill's Resizestop event
// https://github.com/misteroneill/resize-stop
(function (window, setTimeout, Date) {

  var cache = [],
    last = 0,
    timer = 0,
    threshold = 100;

  window.addEventListener('resize', function () {
    last = Date.now();
    timer = timer || setTimeout(checkTime, 10);
  }, false);

  window.resizeStop = {

    setThreshold: function (ms) {
      if (typeof ms === 'number' && ms > -1 && !isNaN(ms) && isFinite(ms)) {
        threshold = ms;
        return ms;
      }
      return false;
    },

    bind: function (callback) {
      if (typeof callback === 'function') {
        cache.push(callback);
        return cache.length - 1;
      }
      return false;
    },

    unbind: function (what) {
      var i = (typeof what === 'number') ? what : cache.indexOf(what);
      if (i > -1) {
        cache.splice(what, 1);
      }
      return i > -1;
    }

  };

  function checkTime() {
    var now = Date.now();
    if (now - last < threshold) {
      timer = setTimeout(checkTime, 10);
    } else {
      clearTimeout(timer);
      timer = last = 0;
      for (var i = 0, max = cache.length; i < max; i++) {
        cache[i]();
      }
    }
  }

})(window, setTimeout, Date);

// Function which does something
function doSomething() {

  var getStyle = document.getElementById("test"),
    contentValue = window.getComputedStyle(document.body, ":after").getPropertyValue("content"),
    size = contentValue.replace(/['"]/g,''),
    element = document.getElementById("which");

  //console.log(size);

  if (size === "phone") { element.innerHTML ="phone"; }
  if (size === "tablet") { element.innerHTML = "tablet"; }
  if (size === "laptop") { element.innerHTML = "laptop"; }
  if(size === "desktop") { element.innerHTML = "desktop"; }

}

// Logic to call the above function
if (live === true ) {
  window.onload = function () {
    doSomething();
  };
  window.onresize = function () {
    doSomething();
  };

// If "live" is false, then trigger on resize stop
} else {
  window.onload = function () {
    doSomething();
    window.resizeStop.bind(doSomething);
  };
}
