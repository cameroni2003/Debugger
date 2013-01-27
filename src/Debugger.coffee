class Dbugger
    @body
    @debugWindow
    
    constructor: ->
        @body = document.getElementsByTagName("body")[0];
        @debugWindow = $('<div id="debuggerWindow"/>');
        @body.append @debugWindow
        
        
    
    @error: (er) ->
        
    @buildDebugWindow: (bodyTag) ->
        @body = $(bodyTag)
        