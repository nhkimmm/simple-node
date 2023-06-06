// localhost:3000을 호출하면 Hello World를 출력한다.
WhatapAgent = require('whatap').NodeAgent;
var http = require('http');
var handleRequest = function(req, res) {
    res.writeHead(200);
    res.end('Hello world');
};

setInterval(() => console.log('app in running...'), 3000)

var www = http.createServer(handleRequest);
www.listen(3000); 
