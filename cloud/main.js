Parse.initialize(mr2tH58Z8CfHb30VfInRDfGY49FBqLoDNKLuQhVf, uAdSpnycbkvZkJxNIV1Ga0Yoi3abWxrJUES8Jv3X, apwkKhhDXDHHqB3RmnvTGa6cLSNCRrMOji4BCkRJ);
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.run('hello', {}, {
  success: function(result) {
    // result is 'Hello world!'
  },
  error: function(error) {
  }
});

// Create a new Parse object
var Post = new ParseObject("Post");
var post = new Post();
 
// Save it to Parse
post.save({"title": "Hello World"}).then(function(object) {
  alert("Yay! It worked!");
});
