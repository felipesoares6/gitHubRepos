import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const Card = styled.View`
  border-width: 2px;
  border-radius: 5px;
  border-color: ${ props => props.theme.primaryColor };
  padding: 10px;
  margin-bottom: 10px;
`

const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${ props => props.theme.secondaryDarkColor };
`

const Description = styled.Text`
  color: ${ props => props.theme.colorText };
  font-weight: bold;
`

const Repository = ({ repository }) => {
  return (
    <Card>
      <Title> { repository.nameWithOwner } </Title>
      <Description> { repository.description || 'No description provided' } </Description>
    </Card>
  )
}

export default Repository
