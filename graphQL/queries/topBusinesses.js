import { gql } from "@apollo/client";

const query = (pageNum, pageSize) => gql`
  query {
    businesses(sort: "updatedAt:desc", pagination: { page: ${pageNum}, pageSize: ${pageSize} }) {
      data {
        id
        attributes {
          name
        description
        email
        instagramID
        owners{
          data{attributes{
            name
          }}
        }
        profilePicture{data{attributes{url}}}
        latestProduct
          bestProducts {
            product1 {
              id
              productName
              productDescription
              productPicture {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            product2 {
              id
              productName
              productDescription
              productPicture {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            product3 {
              id
              productName
              productDescription
              productPicture {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            product4 {
              id
              productName
              productDescription
              productPicture {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            product5 {
              id
              productName
              productDescription
              productPicture {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default query;
