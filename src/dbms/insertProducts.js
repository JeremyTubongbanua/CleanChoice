var csv = require("jquery-csv");
var fs = require("fs");
var data = fs.readFileSync("products.csv", "utf8");
var products = csv.toObjects(data);

const mysql = require(`promise-mysql`);

const name = `ecocheck-385204:us-central1:quickstart-instance`;
const host = `34.173.131.85`;
const port = 3306;
const user = `test`;
const password = `t?f^xg[3ATgfS43*`;
const database = `EcoCheckDBMS`;
const socketPath = `./cloudsql/${name}`;

const config = {
  host,
  port,
  user,
  password,
  database,
};

mysql
  .createPool(config)
  .then((pool) => {
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      let imageUrl = product["Description"].split("|");
      if (imageUrl.length > 1) {
        imageUrl = imageUrl[1];
      } else {
        imageUrl =
          "https://m.media-amazon.com/images/I/61TtYcMIQ3L._AC_UL400_.jpg";
      }
      const queryString = `INSERT INTO Product(ProductID, WarehouseID, ProductSupplierID, Name, Type, Description, Weight, PackagingMaterial, Price) VALUES(${product["ProductID"]}, ${product["WarehouseID"]}, ${product["ProductSupplierID"]}, '${truncateString(product["Name"], 25)}','${product["Type"]}', '${imageUrl}', ${0}, 'Plastic', ${parseInt(product["Price"])});`;
      pool.query(queryString, (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        //   console.log(fields);
      });
    }
  })
  .catch((err) => {
    console.log("poop");
    console.log(err);
  });

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}
