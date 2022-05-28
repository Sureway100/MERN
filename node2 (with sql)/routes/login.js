const express = require("express");
const loginRouter = express.Router();

const products = [];
loginRouter.use("/login", (req, res, next) => {
  console.log("i am not coming");
  res
    .status(200)
    .send(
      "<h1>this is the login page</h1> <form action='#' method='POST'> <input type='text' name='username'/> <button type=''submit > SUBMIT </button> </form>"
    );
  console.log(req.body.username);
  products.push(req.body.username);
  //console.log(req.body);
});

exports.products = products;
module.exports = loginRouter;
