import React from 'react'
import { Text } from 'react-native'
import { pure, compose, branch, renderComponent } from 'recompose'

const Loading = () => (
  <Text> loading... </Text>
)

const displayLoading = branch(
  (props) => props.data.loading,
  renderComponent(Loading)
)

export default displayLoading
