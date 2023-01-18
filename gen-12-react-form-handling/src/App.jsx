import { useState } from 'react'

function App () {
  const [formInput, setFormInput] = useState({
    email: 'b@mbang.com',
    birthDate: '2000-05-04',
    religion: 'islam',
    gender: 'l',
  })
  const [isLoading, setIsLoading] = useState('')

  const handleInput = (type, value) => {
    // cara 1
    const copyFormInput = {...formInput}
    copyFormInput[type] = value
    setFormInput(copyFormInput)

    // cara 2
    // setFormInput({ ...formInput, [type]: value })
  }

  const submitForm = (evt) => {
    evt.preventDefault()
    console.log(formInput)
  }

  return <>
    <form onSubmit={submitForm}>
      <label>
        Email:
        <input required type="text" value={formInput.email} onChange={(evt) => handleInput('email', evt.target.value)} />
      </label>
      <br />
      <label>
        Tanggal Lahir:
        <input type="date" value={formInput.birthDate} onChange={(evt) => handleInput('birthDate', evt.target.value)} />
      </label>
      <br />
      <label>
        Agama:
        <select value={formInput.religion} onChange={(evt) => handleInput('religion', evt.target.value)}>
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
        <input type="radio" value="l" checked={formInput.gender === 'l'} onChange={() => handleInput('gender', 'l')} />
        Laki Laki
      </label>
      <label>
        <input type="radio" value="p" checked={formInput.gender === 'p'} onChange={() => handleInput('gender', 'p')} />
        Perempuan
      </label>

      <br />

      <button>
        SUBMIT
      </button>

    </form>
  </>
}

export default App
