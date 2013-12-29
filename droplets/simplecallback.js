var http = require('http')
  , url = require('url');
 
function request(address) {
    http.get({ host: address, path: '/index.html'}, function(response) {
        // The page has moved make new request
        if (response.statusCode === 302) {
            var newLocation = url.parse(response.headers.location).host;
            console.log('We have to make new request ' + newLocation);
            request(newLocation);
        } else {
            console.log("Response: %d", response.statusCode);
            response.on('data', function(chunk) {
                console.log('Getting body');
            });
            response.on('end', function(chunk) {
                console.log('done');
                return "done";
                // process.exit(1)
            });
        }
    }).on('error', function(err) {
        console.log('Error %s', err.message);
        process.exit(1)
    });
}
 
var name = request('www.google.com');
console.log(name);