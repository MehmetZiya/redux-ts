import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../state'
import RepositoriesList from './RepositoriesList'
import '../index.css'

const App = () => {
  return (
    <Provider store={store}>
      <div id='App'>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  )
}

export default App
