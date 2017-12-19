import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { withState, pure, compose } from 'recompose'

const username = withState('username', 'setUsername', '')

const Form = ({ username, setUsername, handleUserName }) => (
  <View>
    <TextInput
      placeholder='Type the username here!'
      onChangeText={ setUsername }
      value={ username }
      placeholderTextColor='#fff'
    />

    <Button
      onPress={ () => handleUserName(username) }
      title='SEARCH'
      color='#841584'
      accessibilityLabel='Click on this button to search the repos.'
    />
  </View>
)

const FormPure = compose(
  username,
  pure,
)(Form)

export default FormPure
