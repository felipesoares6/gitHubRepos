import React from 'react'
import { View, FlatList } from 'react-native'

import Repository from './Repository'

const keyExtractor = (item) => item.id

const renderItem = ({ item }) => (
  <Repository
    key={ `${item.id}` }
    repository={ item }
  />
)

const List = ({ data }) => (
  <FlatList
    data={ data.user.repositories.nodes }
    keyExtractor={ keyExtractor }
    renderItem={ renderItem }
  />
)

export default List
