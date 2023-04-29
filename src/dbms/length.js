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
  //   socketPath,
//   flags: "-LOCAL_FILES",
  localInfile: false,
};

// mysql
//   .createPool(config)
//   .then((pool) => {
//     return pool.query(`CREATE TABLE Product (
//         ProductID INT NOT NULL,
//         WarehouseID INT NOT NULL,
//         ProductSupplierID INT NULL,
//         Name VARCHAR(500) NULL,
//         Type VARCHAR(500) NULL,
//         Description VARCHAR(500) NULL,
//         Weight INT NULL,
//         PackagingMaterial VARCHAR(500) NULL,
//         Price INT NULL,
//         PRIMARY KEY (ProductID));`, (error, results, fields) => {
//         if(error) throw error;
//         console.log(results);
//     });
//   }).catch((err) => {
//     console.log(err);
//   });

mysql
  .createPool(config)
  .then((pool) => {
    return pool.query(`SELECT COUNT (ProductID) FROM Product;`, (error, results, fields) => {
      if (error) throw error;
      console.log(results);
    //   console.log(fields);
    });
  })
  .catch((err) => {
    console.log("poop");
    console.log(err);
  });

// connection.connect((err) => {

//     if (err) {
//         console.error(`error connecting: ${err.stack}`);
//         return;
//     }

//     console.log(`connected as id ${connection.threadId}`);
// });
