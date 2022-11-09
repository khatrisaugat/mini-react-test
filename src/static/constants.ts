export const API_URL: string = "https://graphqlzero.almansi.me/api";
export const QUERY: string = `query {
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
  }`;
