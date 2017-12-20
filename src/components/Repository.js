import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const Card = styled.View`
  border-width: 2px;
  border-radius: 5px;
  border-color: ${props => props.theme.primaryColor};
  padding: 10px;
  margin-bottom: 10px;
`

const Title = styled.Text`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Repository = ({ repository }) => {
  return (
    <Card>
        <Title> {repository.nameWithOwner} </Title>
        <Text> {repository.description || 'No description provided'} </Text>
    </Card>
  )
}

export default Repository
