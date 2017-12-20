import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const SubmitButton = styled.TouchableOpacity`
  border-width: 2px;
  border-color: ${ props => props.theme.primaryColor };
  border-radius: 5px;
  padding: 10px 30px;
`

const ButtonText = styled.Text`
  font-weight: bold;
  color: ${ props => props.theme.colorText }
`

const Button = ({ handleUserName }) => (
  <SubmitButton
    data-submit-button
    onPress={ handleUserName }
    accessibilityLabel='Click on this button to search the repos.'
  >
    <ButtonText> SEARCH </ButtonText>
  </SubmitButton>
)

export default Button
