import { gql } from "@apollo/client";

const query = gql`
  query {
    categories(sort: "title") {
      data {
        id
        attributes {
          title
          picture {
            data {
              attributes {
                url
              }
            }
          }
          urlName
          description
        }
      }
    }
  }
`;

export default query;
