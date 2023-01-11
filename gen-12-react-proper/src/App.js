import { useState } from 'react'

import ClassExample from "./ClassExample"

function App () {
  const [hobby, setHobby] = useState('Cooking')

  return <>
    <h1>Hello World!</h1>

    <button onClick={() => setHobby('Fishing')}>
      Ubah Hobi
    </button>

    <ClassExample hobby={hobby} />
  </>
}

export default App