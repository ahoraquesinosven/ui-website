import fetch from './api';

const fetchFeaturedContent = async () => {
  const response = await fetch('featured-content?_limit=9');
  const result = await response.json();
  return result;
};

export default fetchFeaturedContent;
