import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

const [login, setLogin] = useState(false);

function loginPressed(){
  setLogin(true);
}

  return (
  <>
  <div>
    <input type="text" />
    <button onClick={loginPressed}>Login</button>
  </div>
  </>
  )

}

export default App
