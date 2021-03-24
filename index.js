var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
app.get('/',function(req,res){
  res.send('Hello World!')
})
var server = app.listen(process.env.PORT,function(){
var port = server.address().port
  console.log('server is listening at port: ' + port)
})
