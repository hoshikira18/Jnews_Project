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
        id
        description
      }
    }
  `;

  const result = await request(graphcmc, query);
  const awnser = await result.newspapers;
  return awnser;
};

export const getOnePost = async (id) => {
  const query = gql`
    query GetOnePost($id: ID!) {
      newspapers(where: { id: $id }) {
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

  const result = await request(graphcmc, query, { id });

  return result.newspapers;
};
