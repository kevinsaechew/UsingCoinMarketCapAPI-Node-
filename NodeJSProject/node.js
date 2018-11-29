var http = require('http');
var dt = require('./myfirstmodule');
const util = require('util')

const CoinMarketCap = require('./node_modules/coinmarketcap-api')
const apiKey = 'api key'
const client = new CoinMarketCap('YOUR KEY')

let variableForAPIResults;

//  console.log(result);
//client.getTickers({limit: 3}).then(function(result) {console.log(result); mmm =  result;}).catch(console.error);

//client.getGlobal().then(console.log).catch(console.error)
//client.getQuotes({symbol: 'ETHOS,XBY'}).then(console.log).catch(console.error)


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);

async function mywaitfunction () {
    mmm = await client.getTickers({limit: 3});
    console.log(variableForAPIResults);
}

mywaitfunction();



