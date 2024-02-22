import { useState } from 'react'
import SimulationLoader from './components/SimulationLoader'
import SimulationResult from './components/SimulationResult'
import './Simulation.css'

function Simulation() {
  const [display, setDisplay] = useState(0)
  const handleClick = () => {
    setDisplay(1)
  }
  const content = [null, <SimulationLoader done={() => setDisplay(2)} />, <SimulationResult />]
  return (
    <>
      <button onClick={handleClick}>Simulate!</button>
      {content[display]}
    </>
  )
}

export default Simulation
