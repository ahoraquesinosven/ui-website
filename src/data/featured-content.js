import fetch from 'node-fetch';

const associatedContentSettings = [
  { field: 'Activity', baseUrl: 'activities' },
  { field: 'Report', baseUrl: 'reports' },
  { field: 'MediaPresence', baseUrl: 'media-presence' },
  { field: 'Campaign', baseUrl: 'campaigns' },
];

const fetchFeaturedContent = async () => {
  const response = await fetch('https://api-website-veg6bn7zeq-uc.a.run.app/featured-contents?_sort=updated_at:DESC&_limit=6');
  const result = await response.json();
  return result.map((featuredContent) => {
    const { field, baseUrl } = associatedContentSettings.find(
      (c) => featuredContent[c.field] !== null,
    );
    const content = featuredContent[field];

    return {
      ...featuredContent,
      URL: `/${baseUrl}/${content.Slug}`,
      AssociatedContent: content,
    };
  });
};

export default fetchFeaturedContent;
