export function convertToUrlFriendly(stringToConvert) {
    return stringToConvert.replace(/\s/g, '%')
}

export function getData(productName, manufacturer, priceCent) {
    const sdk = require('api')('@ditch-carbon/v1.0#15cbhy19lget22eo');

    sdk.auth('ab5874e6a9ea16b03caf9f8bbded49a0');
    sdk.lookupProduct({
        name: productName,
        manufacturer: manufacturer,
        price_cents: priceCent,
        price_currency: 'CAD'
    })
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));
}