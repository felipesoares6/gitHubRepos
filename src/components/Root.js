import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native';

import ReposSearch from './ReposSearch'

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${ props => props.theme.primaryLightColor };
`

const Title = styled.Text`
  font-size: 32px;
  color: ${ props => props.theme.secondaryColor };
`

const Root = () => {
  return (
    <Container>
      <Title> GitHub Repos </Title>

      <ReposSearch />
    </Container>
  )
}

export default Root
