const express = require('express');
const ProductsRouter = express.Router();
const products = require("../data/products.json")

ProductsRouter.route("/").get((req, res)=>{
    res.render("products",{
        products,
    });
});

ProductsRouter.route("/:id").get((req,res)=>{
    const id = req.params.id;
    res.render("product",{
        product:products[id],
    });
});

module.exports = ProductsRouter;