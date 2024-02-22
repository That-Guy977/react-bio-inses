import { useState, useEffect } from 'react'
import { faPlay, faPause, faRepeat, faForwardStep, faBackwardStep, faForwardFast, faBackwardFast } from '@fortawesome/free-solid-svg-icons'
import MediaControl from './MediaControl'


function SimulationResult() {
  const [frame, setFrame] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [repeat, setRepeat] = useState(false)
  useEffect(() => {
    const play = setInterval(() => {
      if (playing) {
        if (frame < 300) {
          setFrame(frame + 1)
        } else if (repeat) {
          setFrame(0)
        } else {
          setPlaying(false)
        }
      }
    }, 50)
    return () => clearInterval(play)
  }, [frame, playing, repeat])
  return (
    <>
      <img src={`simulation/${frame.toString().padStart(4, '0')}.png`} height="500" />
      {frame}/300
      <div className="media-controls">
        <MediaControl icon={faBackwardFast} handleClick={() => { setFrame(0); setPlaying(false); }}/>
        <MediaControl icon={faBackwardStep} handleClick={() => { setFrame(frame > 0 ? frame - 1 : 300); setPlaying(false); }}/>
        <MediaControl icon={!playing ? faPlay : faPause} handleClick={() => { setFrame(frame < 300 ? frame + 1 : 0); setPlaying(!playing); }}/>
        <MediaControl icon={faRepeat} handleClick={() => setRepeat(!repeat)} active={repeat}/>
        <MediaControl icon={faForwardStep} handleClick={() => { setFrame(frame < 300 ? frame + 1 : 0); setPlaying(false); }}/>
        <MediaControl icon={faForwardFast} handleClick={() => { setFrame(300); setPlaying(false); }}/>
      </div>
    </>
  )
}

export default SimulationResult
