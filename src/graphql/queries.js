import { request, gql } from "graphql-request";

const graphcmc = process.env.REACT_APP_API;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      newspapers {
        title
        time
        topic
        content {
          text
        }
        image {
          url
        }
        slug
        description
      }
    }
  `;

  const result = await request(graphcmc, query);
  const awnser = await result.newspapers;
  return awnser;
};

export const getOnePost = async (slug) => {
  const query = gql`
    query GetOnePost($slug: String!) {
      newspapers(where: { slug: $slug }) {
        title
        author
        content {
          html
        }
        description
        image {
          url
        }
        time
        topic
      }
    }
  `;

  const result = await request(graphcmc, query, { slug });

  return result.newspapers;
};

export const getPostsBySearch = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      newspapers(where: { _search: $slug }) {
        title
        time
        topic
        content {
          text
        }
        image {
          url
        }
        slug
        description
      }
    }
  `;

  const result = await request(graphcmc, query, { slug });

  return result.newspapers;
};
