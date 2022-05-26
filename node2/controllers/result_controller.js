const Product = require("../models/product");

exports.resultProducts = (req, res, next) => {
  const products = Product.fetchAll()
    .then(([x, fieldData]) => {
      console.log("this is your result" + products + x);
      res.render("result/result", {
        prods: x,
        pageTitle: "Result page",
      });
    })
    .catch((err) => console.log(err));
};

exports.oneResult = (req, res, next) => {
  const prodId = req.params.resultID;
  Product.fi(prodId, (product) => {
    res.render("/result/one_result", {
      product: product,
      pageTitle: "Resulting page",
    });
  });
};
