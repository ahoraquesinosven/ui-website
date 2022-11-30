import fetch from './api';

const fetchActivity = async (slug) => {
  const response = await fetch(`activities?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

const fetchActivities = async ({ category }) => {
  const filters = category ? `&category.slug=${category}` : '';
  const response = await fetch(`activities?_sort=dateTime:DESC${filters}`);
  return response.json();
};

const fetchActivityCategory = async (slug) => {
  const response = await fetch(`activity-categories?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

export { fetchActivity, fetchActivityCategory, fetchActivities };
