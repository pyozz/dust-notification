import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import styles from './CardItem.module.css'
import { favoriteActions } from '../../../store/favorite-slice'

function CardItem({ sidoName, stationName, dataTime, pm10Grade, pm10Value }) {
  const [isSelected, setIsSelected] = useState(false)
  const dispatch = useDispatch()

  const toggleFavorite = () => {
    if (!isSelected) {
      dispatch(
        favoriteActions.addFavorite({
          sidoName,
          stationName,
          dataTime,
          pm10Grade,
          pm10Value,
        })
      )
    } else {
      dispatch(favoriteActions.removeFavorite())
    }
  }

  return (
    <div className={styles['pm-card']}>
      <header className={styles['pm-card-header']}>
        <div>
          <h2 className={styles['station-name']}>{stationName}</h2>
          <span className={styles['sido-name']}>{sidoName}</span>
        </div>
        <button
          className={styles['star-icon']}
          onClick={() => {
            setIsSelected(!isSelected)
            toggleFavorite()
          }}
          type="button"
        >
          {isSelected ? <AiFillStar /> : <AiOutlineStar />}
        </button>
      </header>

      <div className={styles['pm-card-content']}>
        <strong className={styles.grade}>{pm10Grade}</strong>
        <h2 className={styles.value}>미세먼지 수치 : {pm10Value}</h2>
        <time className={styles.time} dateTime={dataTime}>
          {dataTime} 기준
        </time>
      </div>
    </div>
  )
}

export default CardItem
