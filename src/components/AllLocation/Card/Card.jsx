import React, { useEffect, useState } from 'react'

import CardItem from './CardItem'

function Card({ data, sidoData }) {
  const [dustInfo, setDustInfo] = useState([])

  useEffect(() => {
    try {
      const newSidoData = data.filter((item) => item.sidoName === sidoData)

      setDustInfo(newSidoData)
    } catch (error) {
      console.log(error)
    }
  }, [sidoData])

  return (
    <div>
      {dustInfo.map((item) => (
        <CardItem key={item.stationName} {...item} />
      ))}
    </div>
  )
}

export default Card
