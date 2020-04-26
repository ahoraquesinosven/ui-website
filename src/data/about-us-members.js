import fetch from 'node-fetch';

const fetchAboutUs = async () => {
  const response = await fetch('https://api-website-veg6bn7zeq-uc.a.run.app/about-us');
  const result = await response.json();
  return result;
};

const fetchMembers = async () => {
  const response = await fetch('https://api-website-veg6bn7zeq-uc.a.run.app/team-members?_sort=id:ASC');
  return response.json();
};


export { fetchAboutUs, fetchMembers };
