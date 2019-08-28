import React from 'react'
import { View } from 'react-native'
import Nav from './src/components/nav'

import userReducer from './src/store/reducers/userReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const Home = () => {
  const store = createStore(userReducer)

  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  )
}

export default Home