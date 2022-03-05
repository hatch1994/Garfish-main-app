import { useState } from 'react'
import Navigation from './components/Navigation'
import useGarfish from './hooks/useGarfish'
function App() {
  console.log(import.meta.env)
  const [count, setCount] = useState(0)
  useGarfish()
  return (
    <div className="App">
      <Navigation />
      <div id="micro"></div>
    </div>
  )
}

export default App
