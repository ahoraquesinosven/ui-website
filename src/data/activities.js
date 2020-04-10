import fetch from 'node-fetch';

const fetchActivity = async (slug) => {
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/activities?Slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

export default fetchActivity;
