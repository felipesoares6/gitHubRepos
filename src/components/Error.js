import React from 'react'
import { View, Text } from 'react-native'
import { pure, compose, branch, renderComponent } from 'recompose'
import styled from 'styled-components/native'

const ErrorTitle = styled.Text`
  font-size: 18px;
  color: ${ props => props.theme.secondaryDarkColor };
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
`

const ErrorText = ErrorTitle.extend`
  font-size: 16px;
  color: ${ props => props.theme.colorText };
`

const Error = () => (
  <View>
    <ErrorTitle> Oops! Something went wrong :( </ErrorTitle>
    <ErrorText> Try again and remember to search for a valid GitHub username! </ErrorText>
  </View>
)

const displayError = branch(
  (props) => props.data.error,
  renderComponent(Error)
)

export default displayError
