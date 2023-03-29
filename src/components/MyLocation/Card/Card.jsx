import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'

function Card({ data, stationData }) {
  const [dustInfo, setDustInfo] = useState({})

  useEffect(() => {
    try {
      let { sidoName, stationName, dataTime, pm10Grade, pm10Value } = data.find(
        (item) => item.stationName === stationData
      )

      setDustInfo({ sidoName, stationName, dataTime, pm10Grade, pm10Value })
    } catch (error) {
      console.log(error)
    }
  }, [stationData])

  return (
    <div className={styles['pm-card']}>
      <header className={styles['pm-card-header']}>
        <h2 className={styles['station-name']}>{dustInfo.stationName}</h2>
        <span className={styles['sido-name']}>{dustInfo.sidoName}</span>
      </header>

      <div className={styles['pm-card-content']}>
        <strong className={styles.grade}>{dustInfo.pm10Grade}</strong>
        <h2 className={styles.value}>미세먼지 수치 : {dustInfo.pm10Value}</h2>
        <time className={styles.time} dateTime={dustInfo.dataTime}>
          {dustInfo.dataTime} 기준
        </time>
      </div>
    </div>
  )
}

export default Card
