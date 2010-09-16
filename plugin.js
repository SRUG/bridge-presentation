function MyPlugin() {
    MyPlugin.superclass.constructor.apply(this, arguments);
}

Y.extend(MyPlugin, Y.Plugin.Base, {
    initializer: function() {
        this.afterHostEvent("render", this._addSomeStuff);
    },
    _addSomeStuff: function() {
        var host = this.get("host");
        host.get("contentBox").append("<p>Added by plugin™</p>");
    }
}, {
    NAME: "myplugin",
    NS: ""
});

var o = new MyWidget({ plugins: [{ fn: MyPlugin }] }).render();
