import React from 'react'

function CardItem({ data, parameters }) {
  const a = data.find((item) => item.stationName === parameters.stationName)

  return (
    <div>
      <h2>{a.sidoName}</h2>
    </div>
  )
}

export default CardItem
