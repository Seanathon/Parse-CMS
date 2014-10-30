$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("mr2tH58Z8CfHb30VfInRDfGY49FBqLoDNKLuQhVf", "uAdSpnycbkvZkJxNIV1Ga0Yoi3abWxrJUES8Jv3X");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});