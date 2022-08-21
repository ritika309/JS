var http = require('http')
var url = require('url')



http.createServer(function(req,res)
{
    var route = req.url
    if(route=== '/')
    {
        res.end("This is from backend")
    }
    if(route=== '/getusernames')
    {
        

        var usernames = ['messi' ,'ronaldo']
        res.end(JSON.stringify(usernames))
    }
    console.log("Nodejs server started successfully ")


}).listen(5000)
