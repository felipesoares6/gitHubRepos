import React from 'react'
import { Text, Image } from 'react-native'
import styled from 'styled-components/native'

import opacityStar from '../images/opacityStar.png'
import pinkStar from '../images/pinkStar.png'

const StarsCount = styled.Text`
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  max-width: 90%;
  color: ${ props => props.theme.secondaryColor };
`

const StarImage = styled.Image`
  margin-top: 2.2px;
  margin-left: 5px;
  height: 16px;
  width: 16px;
`

const handleStarImage = (repository) => repository.stargazers.totalCount ? pinkStar : opacityStar

const Star = ({ repository }) => (
  <StarsCount>
    { repository.stargazers.totalCount }

    <StarImage source={ handleStarImage(repository) } />
  </StarsCount>
)

export default Star
