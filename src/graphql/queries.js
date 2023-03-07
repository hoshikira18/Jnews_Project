import { request, gql } from "graphql-request";

const graphcmc = process.env.REACT_APP_API;

export const getPosts = async (lang) => {
  const query = gql`
    query MyQuery($lang: String!) {
      newspapers(where: { language: $lang }) {
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
        tag
      }
    }
  `;

  const result = await request(graphcmc, query, { lang });
  const awnser = await result.newspapers;
  return awnser;
};

export const getPostss = async () => {
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

export const getPostsByTag = async (tag) => {
  const query = gql`
    query getPostsByTag ($tag: String!)) {
      newspapers(where: { tag: $tag }) {
        title
        slug
        tag
      }
    }
  `;

  const result = await request(graphcmc, query, { tag });

  return result.newspapers;
};
