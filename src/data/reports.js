import fetch from 'node-fetch';

const fetchReport = async (slug) => {
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/reports?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

const fetchReports = async ({ category, fromDate }) => {
  const parameters = ['_sort=toDate:DESC'];
  if (category) {
    parameters.push(`category.slug=${category}`);
  }
  if (fromDate) {
    parameters.push(`toDate_gte=${fromDate}`);
  }
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/reports?${parameters.join('&')}`);
  return response.json();
};

const fetchReportCategory = async (slug) => {
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/report-categories?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

export {
  fetchReport, fetchReportCategory, fetchReports,
};
