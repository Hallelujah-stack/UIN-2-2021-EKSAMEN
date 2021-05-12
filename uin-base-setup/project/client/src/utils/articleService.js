import client from './client';

const articleFields = `
title,
'slug': slug.current,
lead,
'image': image{alternativeText, caption, asset->{url}},
'category': category->title,
'cards': cards[]{_key, title, text, 'link': link[]{_key, name, href}, 'img': image{..., asset->{url}}}
`;

export const firstService = async () => {
  const data = await client.fetch(`*[_type == "article"]{${articleFields}}`);
  return data;
};

export const getArticle = async (slug) => {
  const data = await client.fetch(
    `*[_type == "article" && slug.current == $slug]{${articleFields},
    body[]{...}}`,
    { slug }
  );
  return data?.[0];
};
