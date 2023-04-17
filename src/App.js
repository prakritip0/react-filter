import React from 'react'
import Display from './components/Display'
import Filters from './components/Filters'

const App = () => {
  return (
    <div>
      <h1>Filter</h1>
      <Filters />
      <Display chosenCategory={defaultTag} />
    </div>
  )
}

export default App
