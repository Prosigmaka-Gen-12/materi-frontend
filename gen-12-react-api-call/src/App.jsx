import { useState } from 'react'
import axios from 'axios'

function App() {
  const [isLoading, setIsLoading] = useState(false)

  const testApiThenCatch = () => {
    setIsLoading(true)
    axios.put('https://dummyjson.com/products/1')
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }

  const testApiAsyncAwait = async () => {
    try {
      setIsLoading(true)
      const res = await axios.put('https://dummyjson.com/products/1')
      console.log(res)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return isLoading
  ? <h1>Loading...</h1>
  : <>
    <h1>weiii</h1>
    <button onClick={testApiThenCatch}>
      Test Api Then Catch
    </button>
    <button onClick={testApiAsyncAwait}>
      Test Api Async Await
    </button>
  </>
}

export default App
