var express = require('express')
var app = express()
app.get('/',function(req,res){
  res.send('Deployed!')
})
var server = app.listen(process.env.PORT,function(){
var port = server.address().port
  console.log('server is listening at port: ' + port)
})
