const express = require("express");
const mysql = require("mysql");

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

const initializeWebServer = () => {
  const app = express();
  const port = 3001;

  app.use(express.json());

  app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening on port ${port}!`);
    console.log("http://localhost:3000");
  });

  app.get("/product", (req, res) => {
    console.log("/product");
    // console.log(req.body);
    console.log(req.query);

    const connection = mysql.createConnection(config);
    connection.connect();
    connection.query(`SELECT * FROM Product`, (err, rows, fields) => {
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if (row["ProductID"] == req.query["id"]) {
          res.send(row);
          break;
        }
      }
    });
  });
  app.get("/ecocheck", (req, res) => {
    console.log("/ecocheck");
    console.log(req.body);

    const connection = mysql.createConnection(config);
    connection.connect();
    connection.query(`SELECT * FROM EcoCheck`, (err, rows, fields) => {
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if (row["ProductID"] == req.body["id"]) {
          res.send(row);
          break;
        }
      }
    });
  });
};

initializeWebServer();
