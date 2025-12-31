import React from "react"
import Dock from "../../component/Dock/Dock"
import { faBook, faEye, faSquareCheck, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const nav = [
    'Books', 'Reading', 'Done', 'Reccomend'
  ]
  const faIcon = [
    faBook, faEye, faSquareCheck, faThumbsUp
  ]
  return (
    <>
      <Dock nav={nav} faIcon={faIcon}></Dock>
    </>
  )
}