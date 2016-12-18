'use strict';

// required the express module
var express = require('express'),
	posts = require('./mock/posts.json');

// assign express to the app variable
// useing the set method set the veiw engine to jade
// useing the set method set the views directory to templates

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/templates')

//sets the html render engine to jade
	//tells express that files to render are in the templates folder using dirname property



// set up development server useing listen method on app
// one parameter which is the port for the server
app.listen(3000, function(){
	console.log('The frontend server is running on port 3000!')
});

// provide our get request with a get method on app passing 
//two parameter  a '/' or index route for home and a anamous callback function with request and respnse objects as parameter
app.get('/', function(request, response){
	//useing the render method on the response obj will render the index.jade file 
	response.render("index");

});
//using the get method to create a new route to the blog
app.get('/blog/:title', function(request, response){
	//useing the send method on the response obj to send my json file that is in the mock folder handles by the variable posts
	 var title = request.params.title;
	 var post = posts[title];
		response.render('post', { post: post});

	
});

