import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { withState, pure, compose } from 'recompose'

const Repositories = ({ username }) => {
  return (
    <View>
      <Text>{ username }</Text>
    </View>
  )
}

export default Repositories
