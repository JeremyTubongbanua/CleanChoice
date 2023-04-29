var csv = require("jquery-csv");
var fs = require("fs");
var data = fs.readFileSync("ecocheck.csv", "utf8");
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

// mysql
//   .createPool(config)
//   .then((pool) => {
//     const queryString = `SELECT * FROM EcoCheck;`;
//     pool.query(queryString, (error, results, fields) => {
//     //   const product = products[i];

//       if (error) throw error;
//       //   console.log(results);
//       console.log(fields);
//       //   console.log(fields);
//     });
//     for (let i = 0; i < products.length; i++) {}
//   })
//   .catch((err) => {
//     console.log("poop");
//     console.log(err);
//   });

mysql
  .createPool(config)
  .then((pool) => {
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      console.log(product);

      const queryString = `
        INSERT INTO EcoCheck(
            'ProductID',
            'WarehouseID',
            'ProductSubstitutes',
            'ProductShipmentDistance',
            'EnergyRequiredManf', 
            'AmountPackagingWaste', 
            'OverallEcoCheckScore') 
        VALUES(
            ${product["ProductID"]}, 
            ${product["WarehouseID"]}, 
            '${product["ProductSubtitutes"]}',
            '${product["ProductShipmentDistance"]}',
            '${product["EnergyRequiredManf"]}',
            '${product["AmountPackagingWaste"]}',
            '${product["OverallEcoCheckScore"]}
        );`;
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
