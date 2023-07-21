import fetch from './api';

const associatedContentSettings = [
  { field: 'activity', baseUrl: 'activities' },
  { field: 'report', baseUrl: 'reports' },
  { field: 'media_presence', baseUrl: 'media-presence' },
  { field: 'campaign', baseUrl: 'campaigns' },
];

const fetchHomeImages = async () => {
  const response = await fetch('home-images/?_sort=updated_at:DESC&_limit=3');
  const result = await response.json();
  return result.map((home) => {
    const { field, baseUrl } = associatedContentSettings.find(
      (c) => home[c.field] !== null,
    );
    const content = home[field];

    return {
      ...home,
      URL: `/${baseUrl}/${content.slug}`,
    };
  });
};

export default fetchHomeImages;
