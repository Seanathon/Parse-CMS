$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("mr2tH58Z8CfHb30VfInRDfGY49FBqLoDNKLuQhVf", "uAdSpnycbkvZkJxNIV1Ga0Yoi3abWxrJUES8Jv3X");
 
 	// Extending a JavaScript class from the Blog class on Parse.com
	var Portfolio = Parse.Object.extend("Portfolio");

	// List of blog objects in Blog class
	var PortfolioItems = Parse.Collection.extend({
    	model: Portfolio
	});

	// Creating new instance of Blogs collection
	var portfolio = new PortfolioItems();

	// Festching and logging Blog table into console with no specifications
	portfolio.fetch({
	    success: function(portfolio) {
	    	// Upon fetch success callback, create a new instance of BlogsView
	    	// render that new instance and put it in the main-container on the page
	        var portfolioView = new PortfolioView({ collection: PortfolioItems });
		    portfolioView.render();
		    $('.main-container').html(portfolioView.el);
	    },
	    error: function(portfolio, error) {
	        console.log(error);
	    }
	});

	// render portfolio on page using handlebars blog template
	var PortfolioView =  Parse.View.extend({
		// extend the Parse.View and use the template variable key
		// to use Handlebars to compile our portfolio template to HTML
	    template: Handlebars.compile($('#portfolio-tpl').html()),
	    // then use the render function key to get the data in
	    // the collection variable to convert this.collection into JSON
	    // and render it with the template while assigning it to this.$el
	    render: function(){ 
	        var collection = { portfolios: this.collection.toJSON() };
	        this.$el.html(this.template(collection));
	    }
	});

});
