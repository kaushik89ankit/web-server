var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication : function(req,res,next){

		console.log('private route hit!IS what makes git sexy');
		next();

	},

	logger:function(req,res,next){
		console.log(req.method + ' ' + req.originalUrl + ' ' + new Date().toString());
		next();
	}
};

app.use(middleware.logger);

//app.use(middleware.requireAuthentication);

app.get('/aboutus',middleware.requireAuthentication,function(req,res){

	res.send('This is about us not just you!!');

});

app.use(express.static(__dirname + '/public'));

app.listen(PORT,function(){
	console.log('express server started at ' + PORT);
});