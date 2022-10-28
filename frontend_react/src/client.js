// Use Sanity Client to fetch real data from Sanity dashboard
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Connection of our Sanity client with our React application.
// Call sanityClient as a function to get the client and provide an object with the configuration.
export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-07-28',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

// Useful for building image URLs
const builder = imageUrlBuilder(client);

// Get the image URL for a given image object
export const urlFor = (source) => builder.image(source);