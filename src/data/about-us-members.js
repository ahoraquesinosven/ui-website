import fetch from 'node-fetch';

const fetchAboutUs = async () => {
  const response = await fetch('https://api-website-veg6bn7zeq-uc.a.run.app/about-us');
  const result = await response.json();
  return result;
};

const fetchMembers = async () => {
  const response = await fetch('https://api-website-veg6bn7zeq-uc.a.run.app/team-members?_sort=id:ASC&role=miembro');
  const members = await response.json();
  return members;
};

const fetchCollaborators = async () => {
  const response = await fetch('https://api-website-veg6bn7zeq-uc.a.run.app/team-members?_sort=id:ASC&role=colaboradora');
  const collaborators = await response.json();
  return collaborators;
};


export { fetchAboutUs, fetchMembers, fetchCollaborators };
