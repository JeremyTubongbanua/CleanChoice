import axios from 'axios';

export function convertToUrlFriendly(stringToConvert) {
  return stringToConvert.replace(/\s/g, '%');
}

export async function getData() {
  // export async function getData(productName, manufacturer, priceCent) {
  // const sdk = require('api')('@ditch-carbon/v1.0#15cbhy19lget22eo');

  // sdk.auth('ab5874e6a9ea16b03caf9f8bbded49a0');
  // sdk.lookupProduct({
  //     name: productName,
  //     manufacturer: manufacturer,
  //     price_cents: priceCent,
  //     price_currency: 'CAD'
  // })
  // .then(({ data }) => console.log(data))
  // .catch(err => console.error(err));

  const response = await axios.get('https://api.ditchcarbon.com/v1.0/product', {
    params: {
      'name': 'shampoo',
      'manufacturer': 'dove',
      'price_cents': '10000',
      'price_currency': 'CAD'
    },
    headers: {
      'accept': 'application/json',
      'authorization': 'Bearer ab5874e6a9ea16b03caf9f8bbded49a0'
    }
  });

  console.log(response);
}
