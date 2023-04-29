function convertToUrlFriendly(stringToConvert) {
    return stringToConvert.replace(/\s/g, '%')
}

function getData(productName, manufacturer, priceCent) {
    const sdk = require('api')('@ditch-carbon/v1.0#15cbhy19lget22eo');

    sdk.auth('8cbf161c93aa3e1abc7839a9e423f2a0');
    sdk.lookupProduct({
        name: productName,
        manufacturer: manufacturer,
        price_cents: priceCent,
        price_currency: 'CAD'
    })
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err))
    .finally(() => console.log(''))

}

module.exports = {getData};

