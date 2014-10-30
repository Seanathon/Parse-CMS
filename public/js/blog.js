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
	    	// Upon fetch success callback, create a new instance of BlogsView
	    	// render that new instance and put it in the main-container on the page
	        console.log(blogs);
	        var blogsView = new BlogsView({ collection: blogs });
		    blogsView.render();
		    $('.main-container').html(blogsView.el);
	    },
	    error: function(blogs, error) {
	        console.log(error);
	    }
	});

	// render blogs on page using handlebars blog template
	var BlogsView =  Parse.View.extend({
		// extend the Parse.View and use the template variable key
		// to use Handlebars to compile our blogs template to HTML
	    template: Handlebars.compile($('#blogs-tpl').html()),
	    // then use the render function key to get the data in
	    // the collection variable to convert this.collection into JSON
	    // and render it with the template while assigning it to this.$el
	    render: function(){ 
	        var collection = { blog: this.collection.toJSON() };
	        this.$el.html(this.template(collection));
	    }
	});

});
