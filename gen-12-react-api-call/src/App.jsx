import { useState } from 'react'
import axios from 'axios'

function App() {

  const testApiThenCatch = () => {
    axios.get('https://dummyjson.com/products/1')
      .then(res => console.log(res))
  }

  return <>
    <h1>weiii</h1>
    <button onClick={testApiThenCatch}>
      Test Api
    </button>
  </>
}

export default App
