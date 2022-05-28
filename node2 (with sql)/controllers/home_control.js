const Product = require("../models/product");

exports.getHome = (req, res, next) => {
  console.log("get Home Page");
  // res.status(200).sendFile(path.join(__dirname, "..", "views", "home.html"));
  res
    .status(404)
    .render("home", { pageTitle: "home page", mainHeader: "SPINACH" });
};

exports.postHome = (req, res, next) => {
  const title = req.body.title;
  const image = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, image, description, price);

  product
    .save()
    .then(() => {
      console.log(
        "you have posted ",
        product,
        "and will be redirected to result"
      );
      res.redirect("/result");
    })
    .catch((err) => console.log(err));
};

// exports.resultProducts = (req, res, next) => {
//   const products = Product.fetchAll();
//   console.log("this is not your result" + products);
//   res.render("result/result", {
//     prods: products,
//     pageTitle: "Result page",
//   });
// };
