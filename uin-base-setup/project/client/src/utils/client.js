import sanityClient from '@sanity/client';

const options = {
  projectId: process.env.jqdj8kih,
  dataset: process.env.production,
};

const client = sanityClient({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
});

export default client;
