var o = new MyClass();

o.on("myAttrChange", function(event) {
    Y.log("previous value was: " + event.prevVal);
    Y.log("new value is: " + event.newVal);
});

o.set("myAttr", "5 zł");

// previous value was: 1
// new value is: 5

o.get("myAttr"); // => 5

o.setAttrs({ myAttr: 100 });
o.reset();
