import React from "react"
import Dock from "../../component/Dock/Dock"
import { faBook, faEye, faSquareCheck, faDatabase } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
  const nav = [
    'Books', 'Readings', 'Done', 'Backup'
  ]
  const faIcon = [
    faBook, faEye, faSquareCheck, faDatabase
  ]
  return (
    <>
      <Dock nav={nav} faIcon={faIcon} routes={props.routes}></Dock>
    </>
  )
}