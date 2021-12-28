var http = require("http");
url = "http://www.boredapi.com/api/activity?key=5881028";

var request = http.get(url, function (response) {
    // data is streamed in chunks from the server
    // so we have to handle the "data" event    
    var buffer = "", 
        data;

    response.on("data", function (chunk) {
        buffer += chunk;
    }); 

    response.on("end", function (err) {
        // finished transferring data
        // dump the raw data
        data = JSON.parse(buffer);

        console.log(data);
    }); 
}); 
 