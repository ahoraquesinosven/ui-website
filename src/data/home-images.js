import fetch from 'node-fetch';

const fetchHomeImages = async () => {
  const response = await fetch('https://api-website-veg6bn7zeq-uc.a.run.app/home-images/?_sort=updated_at:DESC&_limit=3');
  return response.json();
};


export default fetchHomeImages;
