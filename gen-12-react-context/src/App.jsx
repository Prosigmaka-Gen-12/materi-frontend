import Footer from "./Footer"
import Header from "./Header"

import { useContext } from 'react'
import { UserContext } from './UserProvider'

function App() {
  const { name } = useContext(UserContext)

  return <>
    <Header />
    <h1>{name}</h1>
    <Footer />
  </>
}

export default App
