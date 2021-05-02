import client from './client';

const articleFields = `
  title,
  slug,
  category
`;
export const firstServiceWithParam = async (slug) => {
    const data = await client.fetch(`*[_type == "article"]{${articleFields}}`, { slug });
    return data?.[0];
  };