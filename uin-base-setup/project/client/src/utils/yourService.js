// Dette er en demo for måter å hente data på.
// Du må huske å erstatte ADD_YOUR_TYPE_HERE med egne dokumenttyper fra Sanity

import client from './client';

const articleFields = `
  title,
  'slug': slug.current,
  'category': category->title,
`;

const otherFields = `
  add_your_fields_here
`;

export const firstService = async () => {
  const data = await client.fetch(`*[_type == "article"]{${articleFields}}`);
  return data;
};

export const secondService = async () => {
  const data = await client.fetch(
    `*[_type == "ADD_YOUR_TYPE_HERE"]{${otherFields}}`
  );
  return data;
};

export const firstServiceWithParam = async (slug) => {
  const data = await client.fetch(
    `*[_type == "article" && slug.current == $slug]{${articleFields}, body[]{...}}`,
    { slug }
  );
  return data?.[0];
};
