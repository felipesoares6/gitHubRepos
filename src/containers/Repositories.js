import React from 'react'
import { FlatList } from 'react-native'
import { pure, compose } from 'recompose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import displayLoading from '../components/Loading'
import displayError from '../components/Error'

import Repository from '../components/Repository'

const keyExtractor = (item) => item.id

const renderItems = ({ item }) => (
  <Repository
    key={ `${item.id}` }
    repository={ item }
  />
)

const RepositoriesPure = ({ data }) => (
  <FlatList
    data={data.user.repositories.nodes}
    keyExtractor={keyExtractor}
    renderItem={renderItems}
  />
)

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
)(RepositoriesPure)

export default Repositories
