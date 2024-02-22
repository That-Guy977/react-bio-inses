import { useState } from 'react'
import Loader from './components/Loader'
import DetectResult from './components/DetectResult'
import './Detect.css'

function Detect() {
  const [display, setDisplay] = useState(0)
  const handleClick = () => {
    setDisplay(1)
    setTimeout(() => setDisplay(2), 1500)
  }
  const content = [null, <Loader />, <DetectResult image="detect/image.jpg" pest={57} pred={45} />]
  return (
    <>
      <button onClick={handleClick}>Detect!</button>
      {content[display]}
    </>
  )
}

export default Detect
