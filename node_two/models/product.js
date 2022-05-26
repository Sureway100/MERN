const db = require("../util/database");

module.exports = class Product {
  constructor(title, image, description, price) {
    this.id = null;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
  }

  save() {
    return db.execute(
      "INSERT INTO gallery (id, title, price, description, image) VALUES (?, ?, ?, ?, ?)",
      [this.id, this.title, this.price, this.description, this.image]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute("SELECT * FROM gallery");
  }

  static findById(id) {
    return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
  }
};
