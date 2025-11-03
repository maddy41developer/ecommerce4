import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Signup from './authentication/signup/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
<Route path='/' element = {<Signup />} />

      </Routes>
    </>
  )
}

export default App
