// The version 3 base url for TMDB developer API
// https://developers.themoviedb.org/3/getting-started/introduction
export const BASE_URL_API_V3 = 'https://api.themoviedb.org/3';
// Images have a different base url
// TODO: this should be cached as described in https://developers.themoviedb.org/3/configuration/get-api-configuration
export const BASE_URL_IMAGES = 'http://image.tmdb.org/t/p';

// Queryable content on TMDB
export const CONTENT_TYPE_ALL = 'all';
export const CONTENT_TYPE_MOVIES = 'movie';
export const CONTENT_TYPE_TV = 'tv';

// API Key
// TODO: should not be here in plain text :/
export const API_KEY = '5f6931beb246d18649686718b79f3da5';
