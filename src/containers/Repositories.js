import React from 'react'
import { pure, compose } from 'recompose'

import displayLoading from '../components/Loading'
import displayError from '../components/Error'

import data from '../data'

import List from '../components/List'

const Repositories = compose(
  data,
  displayLoading,
  displayError,
  pure
)(List)

export default Repositories
