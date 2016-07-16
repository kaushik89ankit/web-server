

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

module.exports = middleware;