import React from 'react'
import { View } from 'react-native'
import { withState, pure, compose } from 'recompose'
import styled from 'styled-components/native'

import Form from './Form'
import Repositories from '../containers/Repositories'

const SearchWrapper = styled.View`
  max-width: 90%;
  max-height: 75%;
`

const username = withState('username', 'handleUserName', '')

export const ReposSearchPure = ({ username, handleUserName }) => (
  <SearchWrapper>
    <Form handleUserName={ handleUserName } />

    {
      !!username &&
      <Repositories username={ username } />
    }
  </SearchWrapper>
)

const ReposSearch = compose(
  username,
  pure
)(ReposSearchPure)

export default ReposSearch
