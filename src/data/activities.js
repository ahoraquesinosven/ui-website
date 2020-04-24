import fetch from 'node-fetch';

const fetchActivity = async (slug) => {
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/activities?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

const fetchActivities = async ({ category }) => {
  const filters = category ? `&category.slug=${category}` : '';
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/activities?_sort=updated_at:DESC${filters}`);
  return response.json();
};

const fetchActivityCategory = async (slug) => {
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/activity-categories?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

export { fetchActivity, fetchActivityCategory, fetchActivities };
