import React from 'react'

import stlyes from './Header.module.css'

function Header({ data, setStationData }) {
  const stationChangeHandler = (e) => {
    setStationData(e.target.value)
  }

  return (
    <header className={stlyes.header}>
      <select onChange={stationChangeHandler}>
        <option value="">상세 지역을 선택하세요</option>
        {data.map((item) => (
          <option key={item.stationName} value={item.stationName}>
            {item.stationName}
          </option>
        ))}
      </select>
    </header>
  )
}

export default Header
