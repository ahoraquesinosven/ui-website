import fetch from 'node-fetch';

const fetchFeaturedContent = async () => {
  const response = await fetch('https://api-website-veg6bn7zeq-uc.a.run.app/featured-content?_limit=6');
  const result = await response.json();
  return result;
};

export default fetchFeaturedContent;
