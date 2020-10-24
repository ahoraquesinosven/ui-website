import fetch from './api';

const fetchCampaign = async (slug) => {
  const response = await fetch(`campaigns?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

const fetchCampaigns = async () => {
  const response = await fetch('campaigns?_sort=launchDate:DESC');
  return response.json();
};

export { fetchCampaign, fetchCampaigns };
