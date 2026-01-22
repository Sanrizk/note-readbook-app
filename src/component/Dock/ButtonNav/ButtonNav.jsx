import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router";

// Daisy UI
// darkmode tailwind
// color tailwind
// top right bottom left tailwind

export default function ButtonNav(props) {
  return (
    <>
      <NavLink to={'/' + props.nav.toLowerCase()} className={(props.isActive) ? 'dock-active' : ''}>
        {/* Gunakan variabel ikon, bukan string */}
        <FontAwesomeIcon icon={props.faIcon} />
        <span className="dock-label">{props.nav}</span>
      </NavLink>
    </>
  )
}