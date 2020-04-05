import fetch from 'node-fetch';

const fetchFeaturedContent = async () => {
  const response = await fetch('https://api-website-veg6bn7zeq-uc.a.run.app/featured-contents?_sort=updated_at:DESC&_limit=6');
  const result = await response.json();
  return result;
};

export default fetchFeaturedContent;
