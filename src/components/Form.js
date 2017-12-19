import React from 'react'
import { View } from 'react-native'
import { withState, pure, compose } from 'recompose'
import styled from 'styled-components/native'

import Input from './Input'
import Button from './Button'

const SearchForm = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin-top: 5px;
  margin-bottom: 5px;
`

const username = withState('username', 'setUsername', '')

const Form = ({ username, setUsername, handleUserName }) => (
  <SearchForm>
    <Input
      setUsername={ setUsername }
      username={ username }
    />

    <Button handleUserName={ () => handleUserName(username) } />
  </SearchForm>
)

const FormPure = compose(
  username,
  pure,
)(Form)

export default FormPure
