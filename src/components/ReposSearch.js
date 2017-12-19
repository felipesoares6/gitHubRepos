import React from 'react'
import { View } from 'react-native'
import { withState, pure, compose } from 'recompose'

import Form from './Form'
import Repositories from '../containers/Repositories'

const username = withState('username', 'handleUserName', '')

const ReposSearch = ({ username, handleUserName }) => {
  return (
    <View>
      <Form handleUserName={ handleUserName } />
      <Repositories username={ username } />
    </View>
  )
}

const ReposSearchPure = compose(
  username,
  pure
)(ReposSearch)

export default ReposSearchPure
