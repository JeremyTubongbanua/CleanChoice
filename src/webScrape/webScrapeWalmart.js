const dotenv = require("dotenv");
const { config, getJson } = require("serpapi");

dotenv.config();
config.api_key =
  "da353ab02c9822edb4874ad5da38a9bc973d07312bba3f03c6c526523bf3f9eb"; //your API key from serpapi.com
const resultsLimit = 40; // hardcoded limit for demonstration purpose

const engine = "walmart"; // search engine
const params = {
  query: "pants", // Parameter defines the search query
  page: 1, // Value is used to get the items on a specific page
  //   device: "desktop", // Parameter defines the device to use to get the results
  store_id: "4475", //Store ID to filter the products by the specific store only
  //other parameters: https://serpapi.com/walmart-search-api#api-parameters
};

const getResults = async () => {
  const results = {
    fixedQuery: null,
    organicResults: [],
  };
  while (results.organicResults.length < resultsLimit) {
    const json = await getJson(engine, params);
    if (!results.fixedQuery)
      results.fixedQuery = json.search_information?.spelling_fix;
    if (json.organic_results) {
      results.organicResults.push(...json.organic_results);
      params.page += 1;
    } else break;
  }
  return results;
};

getResults().then((result) => {
  //   console.dir(result, { depth: null });
  const items = result.organicResults;
  for(var i in items) {
    const item = items[i];
    // title
    console.log(item.title);

    // thumbnail
    // console.log('|' + item.thumbnail);

    // primary_offer.offer_price
    // console.log(item['primary_offer']['offer_price']);
  }
});
