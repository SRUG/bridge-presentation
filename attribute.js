YUI().use("attribute", function(Y) {
    function MyClass() {
        this.addAttrs({
            myAttr: {
                value: 1,
                validator: "_validateMyAttr",
                setter: parseInt,
                getter: function(value) {
                    return value * 1000;
                }
            }
        });
    }
    Y.augment(MyClass, Y.Attribute);
});
