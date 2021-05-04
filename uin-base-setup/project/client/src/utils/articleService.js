import client from './client';

const articleFields = `
title,
'slug': slug.current,
'category': category->title,
'cards': cards[]{_key, title, text, 'link': link[]{_key, name, href}, 'img': image{..., asset->{url}}}
`;
export const getArticle = async (slug) => {
  const data = await client.fetch(
    `*[_type == "article" && slug.current == $slug]{${articleFields}}`,
    { slug }
  );
  return data?.[0];
};
