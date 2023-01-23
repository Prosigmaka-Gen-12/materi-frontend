import axios from "axios"
import { useEffect, useState } from "react"

const defaultInput = {
  name: '',
  age: ''
}

function App() {
  const [users, setUsers] = useState([])
  const [formInput, setFormInput] = useState({ ...defaultInput })

  const handleFormInput = (type, value) => setFormInput({ ...formInput, [type]: value })

  const getAllUser = async () => {
    const res = await axios.get('http://localhost:3000/users')
    setUsers(res.data)
  }

  const createUser = async (evt) => {
    evt.preventDefault()
    await axios.post('http://localhost:3000/users', formInput)
    setFormInput({ ...defaultInput })
    getAllUser()
  }

  const deleteUser = async id => {
    await axios.delete('http://localhost:3000/users/' + id)
    getAllUser()
  }

  useEffect(() => {
    getAllUser()
  }, [])

  return <>
    <h1>Form User</h1>

    <form onSubmit={createUser}>
      <label>
        Name: &nbsp;
        <input type="text" value={formInput.name} onChange={evt => handleFormInput('name', evt.target.value)} />
      </label>
      <br /><br />
      <label>
        Age: &nbsp;
        <input type="number" value={formInput.age} onChange={evt => handleFormInput('age', evt.target.value)} />
      </label>
      <br /><br />
      <button>
        SUBMIT
      </button>
    </form>

    <hr />

    <h1>List User</h1>

    <table width="100%" border="1px solid black">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user =>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>
              <button onClick={() => prepareEdit(user.id)}>edit</button>
              <button onClick={() => deleteUser(user.id)}>delete</button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </>
}

export default App
