import React from 'react'
import { View, FlatList } from 'react-native'

import Repository from './Repository'

const keyExtractor = (item) => item.id

const renderItems = ({ item }) => (
  <Repository
    key={ `${item.id}` }
    repository={ item }
  />
)

const List = ({ data }) => (
  <View>
    <FlatList
      data={ data.user.repositories.nodes }
      keyExtractor={ keyExtractor }
      renderItem={ renderItems }
    />
  </View>
)

export default List
