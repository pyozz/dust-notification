import { nanoid } from 'nanoid'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { favoriteActions } from '../../store/favorite-slice'
import { AiFillStar } from 'react-icons/ai'
import styles from './Favorite.module.css'

function Favorite() {
  const favorites = useSelector((state) => state.favorites)
  const dispatch = useDispatch()

  const removeFavoriteHandler = (stationName) => {
    dispatch(favoriteActions.removeFavorite(stationName))
  }

  return (
    <section className={styles['favorite-container']}>
      {favorites.map((favorite) => (
        <div className={styles['pm-card']} key={nanoid()}>
          <header className={styles['pm-card-header']}>
            <div>
              <h2 className={styles['station-name']}>
                {favorite.payload.stationName}
              </h2>
              <span className={styles['sido-name']}>
                {favorite.payload.sidoName}
              </span>
            </div>

            <button
              className={styles['star-icon']}
              onClick={() =>
                removeFavoriteHandler(favorite.payload.stationName)
              }
              type="button"
            >
              <AiFillStar />
            </button>
          </header>

          <div className={styles['pm-card-content']}>
            <strong className={styles.grade}>
              {favorite.payload.pm10Grade}
            </strong>
            <h2 className={styles.value}>
              미세먼지 수치 : {favorite.payload.pm10Value}
            </h2>
            <time className={styles.time} dateTime={favorite.payload.dataTime}>
              {favorite.payload.dataTime} 기준
            </time>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Favorite
