import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Header from './Header/Header'
import Card from './Card/Card'

function MyLocation() {
  const [data, setData] = useState([])
  const [stationData, setStationData] = useState('')

  const getParameters = {
    serviceKey:
      '9jHGvHER545JzjJv7kFuYmUFVwIGkEAr+PpKjqEFX+3X6ZjQT+2c0xz9X3Piz0Eh+Ipb3rEE1nEGzLs/xyWB6w==',
    returnType: 'json',
    numOfRows: '100',
    pageNo: '1',
    sidoName: '서울',
    ver: '1.0',
  }

  const fetchData = async () => {
    const response = await axios.get(
      '/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
      { params: getParameters }
    )
    const responseData = await response.data.response.body.items
    setData(responseData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Header data={data} setStationData={setStationData} />
      <Card data={data} stationData={stationData} />
    </div>
  )
}

export default MyLocation
