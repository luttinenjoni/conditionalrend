import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

const [login, setLogin] = useState(false);

const buttonText = login ? 'Logout' : 'Login'

function loginPressed(){
  setLogin(true);
}

  return (
  <>
  
    <input type="text" />
    <button onClick={loginPressed}>{buttonText}</button>
  
  </>
  )

}

export default App
