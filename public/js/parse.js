$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("mr2tH58Z8CfHb30VfInRDfGY49FBqLoDNKLuQhVf", "uAdSpnycbkvZkJxNIV1Ga0Yoi3abWxrJUES8Jv3X");
 
 	// Extending a JavaScript class from the Blog class on Parse.com
	var Blog = Parse.Object.extend("Blog");

	// List of blog objects in Blog class
	var Blogs = Parse.Collection.extend({
    	model: Blog
	});

	// Creating new instance of Blogs collection
	var blogs = new Blogs();

	// Festching and logging Blog table into console with no specifications
	blogs.fetch({
    success: function(blogs) {
        console.log(blogs);
    },
    error: function(blogs, error) {
        console.log(error);
    }
    
});
