// 引入react核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入APP
import App from './App'

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://127.0.0.1:4000/graphql'
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)