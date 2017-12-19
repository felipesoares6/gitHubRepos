import React from 'react'
import { View } from 'react-native'
import { withState, pure, compose } from 'recompose'

import Form from './Form'
import Repositories from '../containers/Repositories'

const username = withState('username', 'handleUserName', '')

const ReposSearchPure = ({ username, handleUserName }) => (
  <View>
    <Form handleUserName={ handleUserName } />

    {
      !!username &&
      <Repositories username={ username } />
    }
  </View>
)

const ReposSearch = compose(
  username,
  pure
)(ReposSearchPure)

export default ReposSearch
