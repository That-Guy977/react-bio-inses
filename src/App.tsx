import { useOutlet } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const outlet = useOutlet()

  return (
    <>
      <Header />
      <main>
        {outlet || <Navigation />}
      </main>
    </>
  )
}

export default App
