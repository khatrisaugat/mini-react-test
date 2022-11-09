import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

import { API_URL } from "../static/constants";

const client = new GraphQLClient(API_URL);

export function useFetchUsers() {
  return useQuery("users", async () => {
    const { users } = await client.request(gql`
      query {
        users {
          data {
            id
            name
            username
            email
            address {
              street
            }
            phone
            website
          }
        }
      }
    `);
    return users;
  });
}
