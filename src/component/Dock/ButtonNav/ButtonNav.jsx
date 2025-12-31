import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Daisy UI
// darkmode tailwind
// color tailwind
// top right bottom left tailwind

export default function ButtonNav(props) {
  return (
    <>
      <button>
        {/* Gunakan variabel ikon, bukan string */}
        <FontAwesomeIcon icon={props.faIcon} />
        <span className="dock-label">{props.nav}</span>
      </button>
    </>
  )
}