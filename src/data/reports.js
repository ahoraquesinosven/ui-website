import fetch from 'node-fetch';

const fetchReport = async (slug) => {
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/reports?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

const fetchReports = async ({ categories, categoriesExcluded, fromDate }) => {
  const parameters = ['_sort=toDate:DESC'];
  if (categories && categories.length > 0) {
    categories.forEach((category) => {
      parameters.push(`category.slug=${category}`);
    });
  }
  if (categoriesExcluded && categoriesExcluded.length > 0) {
    categoriesExcluded.forEach((categoryExcluded) => {
      parameters.push(`category.slug_ne=${categoryExcluded}`);
    });
  }
  if (fromDate) {
    parameters.push(`toDate_gte=${fromDate}`);
  }
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/reports?${parameters.join('&')}`);
  return response.json();
};

const fetchReportCategory = async (slug) => {
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/report-categories?slug=${slug}`);
  const category = await response.json();
  return (category && category.length > 0) ? category[0] : null;
};

const fetchReportCategories = async (slugs) => {
  if (!slugs) {
    return null;
  }
  const categoriesPromises = slugs.map((slug) => fetchReportCategory(slug));
  return Promise.all(categoriesPromises);
};

export {
  fetchReport, fetchReportCategories, fetchReports,
};
