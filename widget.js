var MyWidget = Y.Base.create("mywidget", Y.Widget, [], {
    renderUI: function() {
        this.get("contentBox").append("<p></p>");
    },
    syncUI: function() {
        this._uiSyncMessage(this.get("message"));
    },
    _uiSyncMessage: function(message) {
        this.get("contentBox").one("p").setContent(message);
    },
    bindUI: function() {
        this.after("messageChange", this._afterMessageChange);
    },
    _afterMessageChange: function(event) {
        this._uiSyncMessage(event.newVal);
    }
}, { ATTRS: { message: { value: "Hello World!" } } });
var o = new MyWidget().render();
o.set("message", "SRUG!");
