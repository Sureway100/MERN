exports.getError = (req, res, next) => {
    console.log('this page path does not exit')
  res.status(404).render("404", { pageTitle: "xPage Not Found" });
}