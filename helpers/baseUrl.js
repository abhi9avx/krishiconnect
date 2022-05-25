const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://krishiconnect.vercel.app'
    : 'http://localhost:3000';
export default baseUrl;
