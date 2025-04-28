const express = require('express');
// const chalk = require('chalk')  //เวอร์ชั่นปัจจุบันไม่รองรับ 20.0.0
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const ProductRouter = express.Router();

const app = express();
const PORT = process.env.PORT;


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");

ProductRouter.route("/").get((req, res)=>{
    res.render('products',{
        product:[
            {productTitle:'จอคอมเกมมิ่ง', productDescription:'จอคอมเกมมิ่ง 35 นิ้ว', price: 3500},
            {productTitle:'จอคอมเกมมิ่ง2', productDescription:'จอคอมเกมมิ่ง 36 นิ้ว', price: 4500},
            {productTitle:'จอคอมเกมมิ่ง3', productDescription:'จอคอมเกมมิ่ง 37 นิ้ว', price: 5500},
            {productTitle:'จอคอมเกมมิ่ง4', productDescription:'จอคอมเกมมิ่ง 38 นิ้ว', price: 6500}
        ],
    });
});
app.use("/products", ProductRouter)


app.get("/", (req, res) => {

    res.render('index',{username: 'Bryan037', customer:["kiki","kitty","hee"]});
})

app.listen(PORT, () => {
    // console.log("Listening on port "+ chalk.red(" : "+port));
    debug("Listening on Port ", PORT);
}) 