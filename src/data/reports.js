import fetch from 'node-fetch';

const fetchReport = async (slug) => {
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/reports?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

const fetchReports = async ({ category }) => {
  const filters = category ? `&category.slug=${category}` : '';
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/reports?_sort=toDate:DESC${filters}`);
  return response.json();
};

const fetchReportCategory = async (slug) => {
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/report-categories?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

const fetchReportsByCategoryAndDate = async ({ category, date }) => {
  const filterCat = category ? `&category.slug=${category}` : '';
  const filterDate = date ? `&toDate_gte=${date}` : '';
  const response = await fetch(`https://api-website-veg6bn7zeq-uc.a.run.app/reports?_sort=toDate:DESC${filterCat}${filterDate}`);
  return response.json();
};

export {
  fetchReport, fetchReportCategory, fetchReports, fetchReportsByCategoryAndDate
};
