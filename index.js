const express = require('express')

const app = express()



app.use('/user/:id',function(req,res,next) {

   res.send('Hello'+  req.params.id)
})



app.listen(3000)