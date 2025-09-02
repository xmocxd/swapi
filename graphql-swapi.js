import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

// Create a new GraphQLClient instance with credentials: 'omit'
const client = new GraphQLClient(endpoint, {
  fetchOptions: {
    credentials: 'omit',
  },
});

// Define your GraphQL query
const query = gql`
{
  allFilms {
    films {
      title
    }
  }
}
`;

// Make the request
async function fetchUsers() {
  try {
    const data = await client.request(query);
    console.log(data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

fetchUsers();