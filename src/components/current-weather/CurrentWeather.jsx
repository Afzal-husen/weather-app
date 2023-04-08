import React from 'react'

const CurrentWeather = ({data}) => {
  return (
    <div>
        {Math.round(data.main.temp_max)} <br />    
        {Math.round(data.main.temp_min)}    
    </div>
  )
}

export default CurrentWeather