import React from "react";
import img from './../../assets/defaultbook.jpg'

export default function Card(props) {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-sm m-3">
        <figure className="w-32">
          <img
            src={img}
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>Penulis: {props.author}</p>
          <p>Halaman: {props.page}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={props.onClickEdit}>Ubah</button>
            <button className="btn btn-error" onClick={props.onClickDelete}>Hapus</button>
          </div>
        </div>
      </div>
    </>
  )
}