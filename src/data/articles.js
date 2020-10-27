import fetch from './api';

const fetchArticle = async (slug) => {
  const response = await fetch(`articles?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

const fetchArticles = async ({ category }) => {
  const filters = category ? `&category.slug=${category}` : '';
  const response = await fetch(`articles?_sort=articleDate:DESC${filters}`);
  return response.json();
};

const fetchArticleCategory = async (slug) => {
  const response = await fetch(`article-categories?slug=${slug}`);
  const result = await response.json();
  return (result && result.length === 1) ? result[0] : null;
};

export {
  fetchArticle, fetchArticleCategory, fetchArticles,
};
