import { useDispatch } from "react-redux"

import Footer from "./Footer"
import Header from "./Header"

function App() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({
      type: 'user/change_name',
      payload: 'Bambang'
    })
  }

  return <>
    <Header />
    <h1 onClick={handleClick}>test</h1>
    <Footer />
  </>
}

export default App