var express = require("express");
var app         = express();

app.use(express.static(__dirname + "/public"));
app.set('port', process.env.PORT || 2000);
app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("index");
})
app.listen(app.get('port'), function(err){
    var d = new Date();
    var n = d.toLocaleTimeString();
        console.log("Port: " + app.get('port') + ", Temp GM server has started! Time: " + n);
        

});
