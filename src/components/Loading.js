import React from 'react'
import { ActivityIndicator } from 'react-native'
import { pure, compose, branch, renderComponent } from 'recompose'

const Loading = () => (
   <ActivityIndicator size='large' color='#fff' />
)

const displayLoading = branch(
  (props) => props.data.loading,
  renderComponent(Loading)
)

export default displayLoading
