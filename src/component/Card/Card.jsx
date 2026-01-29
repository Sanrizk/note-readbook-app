import React, { useEffect, useState } from "react";
import img from './../../assets/defaultbook.jpg'
import CardFigure from "./CardFigure/CardFigure";
import CardBody from "./CardBody/CardBody";
import { useLocation } from "react-router";


export default function Card(props) {
  let className = ''
  if (useLocation().pathname === '/readings' || useLocation().pathname === '/done') {
    className = 'card-side'
  } else if (useLocation().pathname === '/books') {
    className = 'lg:card-side'
  } else {
    className = ''
  }

  return (
    <>
      <div className={`card bg-base-100 shadow-sm m-3 ${className}`}>
        <CardFigure img={img} />
        <CardBody
          title={props.title}
          author={props.author}
          page={props.page}
          slug={props.slug}
          isRead={props.isRead}
          pageRomawi={props.pageRomawi}
          readingNumber={props.readingNumber}
          status={props.status}
          onClickDelete={props.onClickDelete}
          onClickEdit={props.onClickEdit}
          checked={props.checked}
          changeChecked={props.changeChecked}
          index={props.index}
        />
      </div>
    </>
  )
}