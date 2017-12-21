import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { pure, compose } from 'recompose'

import displayEmpty from './Empty'

import Repository from './Repository'

const keyExtractor = (item) => item.id

const renderItem = ({ item }) => (
  <Repository
    key={ `${item.id}` }
    repository={ item }
  />
)


const PureList = ({ data }) => (
  <FlatList
    data={ data.user.repositories.nodes }
    keyExtractor={ keyExtractor }
    renderItem={ renderItem }
  />
)

const List = compose(
  displayEmpty,
  pure
)(PureList)

export default List
