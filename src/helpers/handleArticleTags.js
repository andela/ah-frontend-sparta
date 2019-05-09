const getArticleTags = (tagsArray) => {
  const returnedTagsArray = [];
  tagsArray.map(tag => returnedTagsArray.push(tag.id));
  return returnedTagsArray;
};

export default getArticleTags;
