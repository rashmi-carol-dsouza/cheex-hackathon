const fs = require("fs");
const { categories } = require("./meta-data");

const rawData = JSON.parse(fs.readFileSync("./raw-data.json", "utf-8"));

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomItemsFromArray = (maxCount, arr) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  const n = randomIntFromInterval(1, maxCount);
  return shuffled.slice(0, n);
};

const defaultDescription =
  "Engaging description of the currently viewed category.";
rawData.forEach((content) => {
  const currentCategory = getRandomItemsFromArray(1, categories)[0];
  subCategories = currentCategory.children;
  content.categories.forEach((cat, idx) => {
    try {
      cat.root.id = currentCategory.id;
      cat.root.title = currentCategory.title;
      cat.root.description = currentCategory.description || defaultDescription;
      if(subCategories[idx] === undefined) {
        console.log(`EXCEEDED: Content ID: ${content.id} / Count: ${idx}`);
        delete content.categories[idx];
        return;
      }
      cat.id = subCategories[idx].id;
      cat.title = subCategories[idx].title;
      const tag = getRandomItemsFromArray(1, subCategories[idx].children)[0];
      cat.tag = {
        title: tag.title,
        progression_level: tag.progression_level,
        description: tag.description || defaultDescription,
      };
    } catch (error) {
      console.log(`Current Category: ${JSON.stringify(cat, null, '\t')}, idx: ${idx}`);
      console.error(error.stack)
      throw error;
    }
  });
  delete content.dimensions;
});

const fullDataJson = JSON.stringify(rawData);
fs.writeFileSync("./dist/data.json", fullDataJson, "utf8");

const mockDataJson = JSON.stringify(getRandomItemsFromArray(100, rawData));
fs.writeFileSync("./dist/mock-data.json", mockDataJson, "utf8");
