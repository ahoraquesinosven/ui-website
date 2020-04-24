import fetch from 'node-fetch';

const fetchMediaPresence = async (slug) => {
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/media-presences?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

export default fetchMediaPresence;
