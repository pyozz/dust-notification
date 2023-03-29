import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import styles from './Header.module.css'

function Header({ data, setSidoData }) {
  const allSidoName = [...new Set(data.map((item) => item.sidoName))]

  return (
    <header className={styles.header}>
      <select onChange={(e) => setSidoData(e.target.value)}>
        <option value="">상세 지역을 선택하세요</option>
        {allSidoName.map((sidoName) => (
          <option key={nanoid()} value={sidoName}>
            {sidoName}
          </option>
        ))}
      </select>
    </header>
  )
}

export default Header
