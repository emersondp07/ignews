import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';

export const createClient = (config = {}) => {

  const client = prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACESS_TOKEN,
    ...config,
  });

  prismicNext.enableAutoPreviews({ client })

  return client
}


