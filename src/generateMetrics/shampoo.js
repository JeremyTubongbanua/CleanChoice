// open products.csv
var csv = require("jquery-csv");
var fs = require("fs");
var data = fs.readFileSync("products.csv", "utf8");
var products = csv.toObjects(data);

// console.log(products[0]);
/**
 * {
  ProductID: '0',
  ProductSupplierID: '0',
  Name: 'Garnier Fructis Pure Clean Shampoo, Paraben-Free Silicone-Free with Aloe Extract and Vitamin E, 12.5 Fl Oz Bottle',
  Type: 'Shampoo',
  Price: '8.12',
  Description: '|https://m.media-amazon.com/images/I/51CTIBB4VpS._AC_UL400_.jpg',
  Weight: '',
  PackagingMaterial: 'Plastic'
}
 */

const { getData } = require("../apiUtil/glitchCarbon.js");

for (var i in products) {
  var product = products[i];
  
  var manu = "";
  var split = product["Name"].split(" ");
  manu = split[0];
  
  console.log(product["Name"]);
  console.log(manu);
  getData(product["Name"], manu, 20);
}

// var product = products[0];
// console.log(product["Name"]);

// var manu = "";
// var split = product["Name"].split(" ");
// manu = split[0];

// data = getData(product["Name"], manu, 20);
// console.log(data);
/**
 * {
  carbon_footprint: 0.02916,
  name: 'garnier',
  manufacturer: 'garnier',
  unit: null,
  manufacturer_declared_carbon_footprint: 0.02916,
  source_url: 'https://ditchcarbon.com/calculation-methodologies/',
  methodology: 'supplier',
  manufacturer_reported_kgco2: 0.02916,
  kgco2: 0.02916,
  model: 'garnier'
}
 */
