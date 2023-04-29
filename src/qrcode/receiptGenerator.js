
var url = `http://www.google.com`; // TODO change later



// node receiptGenerator.js <...productIds>
function main() {

    const productIds = process.argv.slice(2);

    // console.log(productIds); // [ '1', '2', '3']

    // 1. append url
    for (let i = 0; i < productIds.length; i++) {
        url += `&productIds[]=${productIds[i]}`;
    }

    console.log(url);

    console.log('==========================================');
    console.log('\n\nYour Receipt\n\n');
    console.log('==========================================');

    console.log('Walmart');

    console.log('\n');

    var csv = require("jquery-csv");
    var fs = require("fs");
    var data = fs.readFileSync("products.csv", "utf8");
    var products = csv.toObjects(data);


    /**
     *  {
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

    let totalPrice = 0;

    for(let i = 0; i < productIds.length; i++) {
        let product = {};
        for (let j = 0; j < products.length; j++) {
            if (products[j]["ProductID"] == productIds[i].toString()) {
                product = products[j];
                break;
            }
        }
        let id = product["ProductID"];
        let name = truncateString(product["Name"], 15);
        let price = product["Price"];
        totalPrice += parseFloat(price);
        console.log(`${id}.\t${name} \t- $${price}`);
    }
    console.log('------------------------------------------');
    console.log(`\tTotal Price: $${totalPrice}`);

    var QRCode = require('qrcode')
    QRCode.toString(url, function (err, string) {
        if (err) throw err
        console.log(string)
    });
}

function truncateString(str, num) {
    if (str.length <= num) {
        return str
    }
    return str.slice(0, num) + '...'
}

main();