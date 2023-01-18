import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('abid@test.com')
  const [birthDate, setBirthDate] = useState('')

  return <>
    <label>
      Email:
      <input type="text" value={email} onChange={(evt) => setEmail(evt.target.value)} />
    </label>
    <br />
    <label>
      Tanggal Lahir:
      <input type="date" value={birthDate} onChange={(evt) => setBirthDate(evt.target.value)} />
    </label>
  </>
}

export default App
