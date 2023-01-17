import { useState } from 'react'
import Children from './Children'

function App () {
  const [isShow, setIsShow] = useState(true)

  return <>
    <h1>ini app</h1>
    <button onClick={() => setIsShow(false)}>
      sembunyikan children
    </button>
    <hr />
    {isShow ? <Children /> : null}
  </>
}

export default App
