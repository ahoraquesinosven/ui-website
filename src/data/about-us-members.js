import fetch from './api';

const fetchAboutUs = async () => {
  const response = await fetch('about-us');
  const result = await response.json();
  return result;
};

const fetchMembers = async () => {
  const response = await fetch('team-members?_sort=id:ASC&role=miembro');
  const members = await response.json();
  return members;
};

const fetchCollaborators = async () => {
  const response = await fetch('team-members?_sort=id:ASC&role=colaboradora');
  const collaborators = await response.json();
  return collaborators;
};


export { fetchAboutUs, fetchMembers, fetchCollaborators };
