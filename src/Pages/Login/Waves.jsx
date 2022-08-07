import React from 'react'
import Wave from 'react-wavify'

const Waves = ({cor}) => {
  return (
    
    <Wave fill={cor}
        paused={false}
        options={{
          height: 50,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  />
   
  )
}

export default Waves