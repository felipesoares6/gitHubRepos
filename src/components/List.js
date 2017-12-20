import React from 'react'
import { FlatList } from 'react-native'

import Repository from '../components/Repository'

const keyExtractor = (item) => item.id

const renderItems = ({ item }) => (
  <Repository
    key={ `${item.id}` }
    repository={ item }
  />
)

const List = ({ data }) => (
  <FlatList
    data={data.user.repositories.nodes}
    keyExtractor={keyExtractor}
    renderItem={renderItems}
  />
)

export default List
