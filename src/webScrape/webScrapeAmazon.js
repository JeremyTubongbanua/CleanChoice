const axios = require("axios");
const cheerio = require("cheerio");

const fetchShelves = async () => {
  try {
    const response = await axios.get(
        // "https://www.amazon.com/s?k=shampoo&crid=ICG2TFJT96WP&sprefix=shampoo%2Caps%2C142&ref=nb_sb_noss_1"
        "https://www.amazon.com/s?k=toilet+paper"
    );

    const html = response.data;

    const $ = cheerio.load(html);

    const items = [];

    $(
      "div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.sg-col-4-of-20"
    ).each(async (_idx, el) => {
      const shelf = $(el);
      const title = shelf
        .find("span.a-size-base-plus.a-color-base.a-text-normal")
        .text();

      const image = shelf.find("img.s-image").attr("src");

      const link = shelf.find("a.a-link-normal.a-text-normal").attr("href");

      const reviews = shelf
        .find(
          "div.a-section.a-spacing-none.a-spacing-top-micro > div.a-row.a-size-small"
        )
        .children("span")
        .last()
        .attr("aria-label");

      const stars = shelf
        .find("div.a-section.a-spacing-none.a-spacing-top-micro > div > span")
        .attr("aria-label");

      const price = shelf.find("span.a-price > span.a-offscreen").text();

      let element = {
        title,
        image,
        link: `https://amazon.com${link}`,
        price,
      };

      if (reviews) {
        element.reviews = reviews;
      }

      if (stars) {
        element.stars = stars;
      }

      // get description
      // const description = await axios.get(element.link);
      // const html = description.data;
      // const descriptionText = $("div#feature-bullets", html).text();

      items.push({ title, image, link, price });
    });

    return items;
  } catch (error) {
    throw error;
  }
};

fetchShelves().then((items) => {
  for (var i in items) {
    const item = items[i];
    // title
    // console.log(item.title);

    // console.log(item.image);
    // const split = item.price.split("$");
    // if (split.length == 3) {
    //   console.log(split[1]);
    //   console.log(split[2]);
    // } else {
    //   console.log(item.price);
    // }
  }
});
