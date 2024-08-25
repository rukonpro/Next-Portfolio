const baseURL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://rukonpro.vercel.app';

    export default baseURL;