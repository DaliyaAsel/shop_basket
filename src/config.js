// Здесь получаем наш API_KEY из файла .env.local
const API_KEY = process.env.REACT_APP_API_KEY;

// Ссылка на магазин
const API_URL = 'https://fortniteapi.io/v1/shop?lang=ru';

export { API_KEY, API_URL}