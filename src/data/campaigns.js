import fetch from 'node-fetch';

const fetchCampaign = async (slug) => {
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/campaigns?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

const fetchCampaigns = async () => {
  const response = await fetch('https://api-website-veg6bn7zeq-uc.a.run.app/campaigns?_sort=updated_at:DESC');
  return response.json();
};

export { fetchCampaign, fetchCampaigns };
