const express = require('express');
// const chalk = require('chalk')  //เวอร์ชั่นปัจจุบันไม่รองรับ 20.0.0
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 6500;
const ProductsRouter = require("./src/router/productRouter")

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/products", ProductsRouter);

app.get("/", (req, res) => {

    res.render('index',{username: 'Bryan037', customer:["kiki","kitty","hee"]});
})

app.listen(PORT, () => {
    // console.log("Listening on port "+ chalk.red(" : "+port));
    debug("Listening on Port ", PORT);
}) 