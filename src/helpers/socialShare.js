const ShareLinks = (article, slug) => {
  const { frontEndURL } = process.env;
  const articleLink = `${frontEndURL}/articles/${slug}`;
  const shareBody = `I found this article to be worth reading, ${article.title} ${articleLink}`;
  const mailshare = `mailto:?Subject=${encodeURI(article.title)}&body=${shareBody}`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(articleLink)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURI(articleLink)}&text=${article.description}`;

  return {
    mailshare, facebookShare, twitterShare,
  };
};

export default ShareLinks;
