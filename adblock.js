var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
if(!isIE11){
"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AdBlockerDetector = /*#__PURE__*/function () {
  /**
   * @param {string} staticsBaseUrl
   */
  function AdBlockerDetector(isPlus, staticsBaseUrl) {
    _classCallCheck(this, AdBlockerDetector);

    this._cachedDetection = null;
    this._staticsBaseUrl = staticsBaseUrl;
    if (isPlus) this._url = "".concat(this._staticsBaseUrl, "/statics/px.gif");else this._url = "".concat(this._staticsBaseUrl, "/statics/dfp.js");
  }
  /**
   * Returns a promise that resolves with a boolean indicating if the current user is using an
   * ad blocker
   * @return {Promise.<boolean>}
   */


  _createClass(AdBlockerDetector, [{
    key: "detect",
    value: function detect() {
      if (!this._cachedDetection) {
        this._cachedDetection = this._forceDetection();
      }

      return this._cachedDetection;
    }
    /**
     * @return {Promise.<boolean>}
     */

  }, {
    key: "_forceDetection",
    value: function _forceDetection() {
      return fetch(this._url).then(function (response) {
        return response.status === 0;
      }).catch(function () {
        return true;
      });
    }
  }]);

  return AdBlockerDetector;
}();

function sendTracker(detectplus, value) {
  if (detectplus) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      "adblockerplus": value
    });
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      "adblocker": value
    });
  }
}

var adblocker = new AdBlockerDetector(false, 'https://megabdwap.blogspot.com').detect().then(function (detected) {
  if (detected) {
    sendTracker(false, 'true');
    //alert('teste')
  } else {
    sendTracker(false, 'false');
    //alert('nÃ£o teste')
  }
});
var adblockerPlus = new AdBlockerDetector(true, 'https://megabdwap.blogspot.com').detect().then(function (detected) {
  if (detected) {
    sendTracker(true, 'true');
    
  } else {
    sendTracker(true, 'false');
    
  }
});
}
