import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [users, setUsers] = useState([])

  const getAllUser = async () => {
    const res = await axios.get('http://localhost:3000/users')
    setUsers(res.data)
  }

  useEffect(() => {
    getAllUser()
  }, [])

  return <>
    <h1>Form User</h1>
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
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </>
}

export default App
