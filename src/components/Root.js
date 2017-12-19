import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native';

import ReposSearch from './ReposSearch'

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${ props => props.theme.primaryLightColor };
  height: 100%;
  padding-top: 100px;
`

const Title = styled.Text`
  font-size: 32px;
  color: ${ props => props.theme.secondaryColor };
  margin-bottom: 50px;
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
