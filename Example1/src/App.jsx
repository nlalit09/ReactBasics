
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import {Profile} from './components/Profile'
import Form from './components/Form'
import { Usingstate } from './components/UseManagement'
import { Authentication } from './components/Authentication'
import { ClickEvent } from './components/ClickEvent'
function App() {
 
  
  return (
    <>
    <h1>SOHO🫶</h1>
      <Button />
      <Profile />
      <Form />
     <Usingstate />
     <Authentication />
     <ClickEvent />
    </>
  )
}

export default App
