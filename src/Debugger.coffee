class CDebugger
    @body
    @debugWindow
    @defaults:
      logErrors: true
      logWarnings: true
      logDebug: true

    @settings
    
    constructor: ->

    @init: (options) ->
      @body = document.getElementsByTagName("body")[0]
      @debugWindow = $ '<div id="debuggerWindow"></div>'
      $(@body).append @debugWindow

      # settings
      @settings = $.extend {}, @defaults, options

    
    @error: (er) ->
      if @options.logErrors
        @addToWindow("<div>Error: " + er + "</div>")

    @warn: (er) ->
      if @options.logWarnings
        @addToWindow("<div>Warn: " + er + "</div>")

    @debug: (er) ->
      if @options.logDebug
        @addToWindow("<div>Debug: " + er + "</div>")

    @clear: ->
      @debugWindow.empty()

    @addToWindow: (text) ->
      @debugWindow.append text
        
    @buildDebugWindow: (bodyTag) ->
        @body = $(bodyTag)
