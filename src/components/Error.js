import React from 'react'
import { View, Text } from 'react-native'
import { pure, compose, branch, renderComponent } from 'recompose'

const Error = () => (
  <View>
    <Text> Oops! Something went wrong :( </Text>
    <Text> Try again and remember to search for a valid GitHub username! </Text>
  </View>
)

const displayError = branch(
  (props) => props.data.error,
  renderComponent(Error)
)

export default displayError
