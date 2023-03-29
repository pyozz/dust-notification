import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import styles from './App.module.css'

import AllLocation from './components/AllLocation/AllLocation'
import MyLocation from './components/MyLocation/MyLocation'
import Favorite from './components/Favorite/Favorite'

function App() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="myLocation" element={<MyLocation />} />
        <Route path="allLocation" element={<AllLocation />} />
        <Route path="favorite" element={<Favorite />} />
      </Routes>

      <nav className={styles.menu}>
        <Link to="/myLocation">
          <button type="button">내 지역보기</button>
        </Link>
        <Link to="/allLocation">
          <button type="button">전체 지도보기</button>
        </Link>
        <Link to="/favorite">
          <button type="button">즐겨찾기</button>
        </Link>
      </nav>
    </main>
  )
}

export default App
