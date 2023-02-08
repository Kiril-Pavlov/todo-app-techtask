import React from 'react'

import styles from "../styles/popup.module.css"

const Popup = ({popupState, setPopupState}) => {
  return (
    <div className={`${popupState ? styles.overlayContainer : styles.hidden}`} onClick={setPopupState}>

    </div>
  )
}

export default Popup