import React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components/native'

const FormInput = styled.TextInput`
  color: ${ props => props.theme.colorText };
  border-color: ${ props => props.theme.primaryColor };
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
`

const Input = ({ username, setUsername }) => (
    <FormInput
      placeholder='Type the username here!'
      onChangeText={ setUsername }
      value={ username }
      placeholderTextColor='#fff'
    />
)

export default Input
