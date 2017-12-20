import React from 'react'
import { pure, compose } from 'recompose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import displayLoading from '../components/Loading'
import displayError from '../components/Error'

import List from '../components/List'

const data = graphql(gql`
  query repositoriesSearch($username: String!){
    user(login: $username) {
      repositories(last: 10) {
        nodes {
          id,
          nameWithOwner,
          description
        }
      }
    }
  }
`, {
  options: ({ username }) => ({
    variables: { username: username, type: 'String' }
  })
})

const Repositories = compose(
  data,
  displayLoading,
  displayError,
  pure
)(List)

export default Repositories
