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

const Star = ({ repository }) => (
  <StarsCount data-star-count>
    { repository.stargazers.totalCount }

    <StarImage
      source={ repository.stargazers.totalCount > 0 ? pinkStar : opacityStar }
    />
  </StarsCount>
)

export default Star
