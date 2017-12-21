import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

import Star from './Star'

const Card = styled.View`
  border-width: 2px;
  border-radius: 5px;
  border-color: ${ props => props.theme.primaryColor };
  padding: 10px;
  margin-bottom: 10px;
`

const Title = styled.Text`
  font-size: 18px;
  color: ${ props => props.theme.secondaryDarkColor };
  max-width: 90%;
  margin-left: 10px;
`

const Description = styled.Text`
  color: ${ props => props.theme.colorText };
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  max-width: 90%;
`

const Repository = ({ repository }) => (
  <Card>
    <Star repository={ repository } />

    <Title data-title>
      { repository.nameWithOwner }
    </Title>

    <Description data-description>
      { repository.description || 'No description provided' }
    </Description>
  </Card>
)

export default Repository
