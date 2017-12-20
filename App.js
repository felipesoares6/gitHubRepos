import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components/native'

import client from './src/client'
import theme from './src/theme'

import Root from './src/components/Root'

const App = () => (
  <ApolloProvider client={ client }>
    <ThemeProvider theme={ theme }>
      <Root />
    </ThemeProvider>
  </ApolloProvider>
)

export default App
