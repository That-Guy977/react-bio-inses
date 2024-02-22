import { useState, useEffect } from 'react'
import Loader from './Loader'

function SimulationLoader({ done }: SimulationLoaderProps) {
  const [frame, setFrame] = useState(0)
  useEffect(() => {
    const load = setInterval(() => {
      if (frame < 300) {
        setFrame(frame + 1)
      } else {
        clearInterval(load)
        done()
      }
    }, 20)
    return () => clearInterval(load)
  }, [frame, done])
  return (
    <>
      <Loader />
      ({frame}/300)
    </>
  )
}

interface SimulationLoaderProps {
  done: () => void;
}

export default SimulationLoader
