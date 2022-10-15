var http = require('http')
var fs=require('fs')
const path = './test.json'
const newValue={name:'sandy',age:10}
fs.writeFileSync(path,JSON.stringify(newValue))
const data=fs.readFileSync(path,'utf-8')


server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    // res.write('hi')
    res.write(JSON.stringify(data))
    res.end()
}).listen(8080)
console.log(JSON.stringify(data))
console.log('success')