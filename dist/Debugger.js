// Generated by CoffeeScript 1.4.0
var CDebugger;

CDebugger = (function() {

  CDebugger.body;

  CDebugger.debugWindow;

  CDebugger.defaults = {
    logErrors: true,
    logWarnings: true,
    logDebug: true
  };

  CDebugger.settings;

  function CDebugger() {}

  CDebugger.init = function(options) {
    this.body = document.getElementsByTagName("body")[0];
    this.debugWindow = $('<div id="debuggerWindow"></div>');
    $(this.body).append(this.debugWindow);
    return this.settings = $.extend({}, this.defaults, options);
  };

  CDebugger.error = function(er) {
    if (this.options.logErrors) {
      return this.addToWindow("<div>Error: " + er + "</div>");
    }
  };

  CDebugger.warn = function(er) {
    if (this.options.logWarnings) {
      return this.addToWindow("<div>Warn: " + er + "</div>");
    }
  };

  CDebugger.debug = function(er) {
    if (this.options.logDebug) {
      return this.addToWindow("<div>Debug: " + er + "</div>");
    }
  };

  CDebugger.clear = function() {
    return this.debugWindow.empty();
  };

  CDebugger.addToWindow = function(text) {
    return this.debugWindow.append(text);
  };

  CDebugger.buildDebugWindow = function(bodyTag) {
    return this.body = $(bodyTag);
  };

  return CDebugger;

})();
