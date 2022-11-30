import getConfig from 'next/config';
import nodeFetch from 'node-fetch';

const { serverRuntimeConfig } = getConfig();

const apiUrl = (path) => `${serverRuntimeConfig.api.root}/${path}`;

const fetch = (path, options) => nodeFetch(apiUrl(path), options);

export default fetch;
