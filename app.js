const express = require('express');
const chalk = require('chalk')  //เวอร์ชั่นปัจจุบันไม่รองรับ 20.0.0
// const debug = require('debug')('app');
// const morgan = require('morgan');
const app = express();
const port = 6500;

app.use(morgan('combined'));

app.get("/",(req, res)=>{
    
    res.send("Hello world")
})

app.listen(port,()=>{
    // console.log("Listening on port "+ chalk.red(" : "+port));
   // debug("Listening on port ",port);
    console.log(chalk.foregroundColorNames("hello world"))
})