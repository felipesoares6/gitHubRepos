import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

import ReposSearch from './ReposSearch'

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${ props => props.theme.primaryLightColor };
  min-height: 100%;
`

const Title = styled.Text`
  margin-top: 100px;
  font-size: 32px;
  color: ${ props => props.theme.secondaryColor };
`

const Root = () => (
  <Container>
    <Title> GitHub Repos </Title>

    <ReposSearch />
  </Container>
)

export default Root
