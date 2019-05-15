
const getRandomArticles = (count, articles) => {
  // Make a copy of the array
  const temporaryArray = articles.slice(articles);
  const returnedArray = [];

  for (let i = 0; i < count; i += 1) {
    const index = Math.floor(Math.random() * temporaryArray.length);
    const removed = temporaryArray.splice(index, 1);
    // Since we are only removing one element
    returnedArray.push(removed[0]);
  }
  return returnedArray;
};

export default getRandomArticles;
