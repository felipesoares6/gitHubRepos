import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

export default graphql(gql`
  query repositoriesSearch($username: String!){
    user(login: $username) {
      repositories(last: 10) {
        nodes {
          id,
          nameWithOwner,
          description,
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`, {
  options: ({ username }) => ({
    variables: { username: username, type: 'String' }
  })
})
