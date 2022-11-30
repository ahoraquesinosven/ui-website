import fetch from './api';

const fetchMediaPresence = async (slug) => {
  const response = await fetch(`media-presences?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

const fetchMediaPresences = async () => {
  const response = await fetch('media-presences?_sort=publicationDate:DESC');
  return response.json();
};
export { fetchMediaPresence, fetchMediaPresences };
