import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('abid@test.com')
  const [birthDate, setBirthDate] = useState('')
  const [religion, setReligion] = useState('')
  const [gender, setGender] = useState('p')

  return <>
    <h3>Input Value</h3>
    {email} <br />
    {birthDate} <br />
    {religion} <br />
    {gender} <br />
    <hr />

    <label>
      Email:
      <input type="text" value={email} onChange={(evt) => setEmail(evt.target.value)} />
    </label>
    <br />
    <label>
      Tanggal Lahir:
      <input type="date" value={birthDate} onChange={(evt) => setBirthDate(evt.target.value)} />
    </label>
    <br />
    <label>
      Agama:
      <select value={religion} onChange={(evt) => setReligion(evt.target.value)}>
        <option value=""></option>
        <option value="islam">islam</option>
        <option value="kristen protestan">kristen protestan</option>
        <option value="katolik">katolik</option>
        <option value="hindu">hindu</option>
        <option value="budha">budha</option>
      </select>
    </label>

    <br />

    <p>Jenis Kelamin</p>
    <label>
      <input type="radio" value="l" checked={gender === 'l'} onChange={() => setGender('l')} />
      Laki Laki
    </label>
    <label>
      <input type="radio" value="p" checked={gender === 'p'} onChange={() => setGender('p')} />
      Perempuan
    </label>
  </>
}

export default App
