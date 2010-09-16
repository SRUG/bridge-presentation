function MyClass() {
    MyClass.superclass.constructor.apply(this, arguments);
}
Y.extend(MyClass, Y.Base, {
    initializer: function() {
        this.publish("killed");
    },
    destructor: function() {
        this.fire("killed");
    }
}, {
    NAME: "myclass",
    ATTRS: { /* ... */ }
});
var o = new MyClass({ plugins: [{ fn: MyPlugin }] });
