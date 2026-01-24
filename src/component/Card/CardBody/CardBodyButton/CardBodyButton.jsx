import { useLocation } from "react-router"
import { useRef, useEffect, useState } from "react"

export default function CardBodyButton(props) {
  return (
    <div className="card-actions lg:justify-end items-center">
      {(useLocation().pathname === '/books') && (
        <>
          <label htmlFor="my_modal" className="btn btn-primary w-4/5 lg:w-64" onClick={props.onClickEdit}>Ubah</label>
          <button className="btn btn-error w-1/6 lg:w-32" onClick={props.onClickDelete}>Hapus</button>
        </>
      )}

      {(useLocation().pathname === '/readings') && (
        <>
          <label className="label">
            {(props.isRead) ?
              (<input type="checkbox" className="checkbox" defaultChecked disabled />)
              :
              (<input type="checkbox" onChange={(e) => props.changeChecked(e, props.slug, props.index)} className="checkbox" />)
            }
            Dibaca
          </label>

          {(props.isRead) ?
            <label htmlFor="my_modal" className="btn btn-sm btn-primary lg:w-64 rounded-full" onClick={props.onClickEdit}>Update Bacaan</label>
            :
            (<></>)
          }

        </>
      )}

    </div>
  )
}