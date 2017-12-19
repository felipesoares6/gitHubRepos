import React from 'react'
import { Text, View } from 'react-native'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme'
import Root from './src/components/Root'

const TOKEN = '2cd92775eb3e72a098665227aba01dedfd882409'

const httpLink = new createHttpLink({ uri: 'https://api.github.com/graphql' })

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${TOKEN}`,
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={ client }>
      <ThemeProvider theme={ theme }>
        <Root />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
