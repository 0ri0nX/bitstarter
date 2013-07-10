var express = require('express');

var app = express.createServer(express.logger());

var readIndex = function(filename)
{
    var fs = require('fs');

    var x = fs.readFileSync(filename);

    //console.log("[" + x.toString() + "]")
    return x.toString();
}

app.get('/', function(request, response){
    content = readIndex('index.html')
    response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
