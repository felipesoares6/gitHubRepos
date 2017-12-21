import React from 'react'
import { View, Text } from 'react-native'
import { pure, compose, branch, renderComponent } from 'recompose'
import styled from 'styled-components/native'

const EmptyTitle = styled.Text`
  font-size: 18px;
  color: ${ props => props.theme.secondaryDarkColor };
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
`

const Empty = () => (
  <View>
    <EmptyTitle> This username doesn't have any repository. </EmptyTitle>
  </View>
)

const displayEmpty = branch(
  (props) => !props.data.user.repositories.nodes.length,
  renderComponent(Empty)
)

export default displayEmpty
