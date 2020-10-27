import fetch from './api';

const fetchAboutUs = async () => {
  const response = await fetch('about-us');
  const result = await response.json();
  return result;
};

const fetchMembers = async () => {
  const response = await fetch('team-members?_sort=id:ASC');
  return response.json();
};


export { fetchAboutUs, fetchMembers };
