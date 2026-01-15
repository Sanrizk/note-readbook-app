import React, { useEffect, useRef } from "react";

export default function Modal(props) {
  const titleRef = useRef()
  const authorRef = useRef()
  const pageRomRef = useRef()
  const pageRef = useRef()

  // useEffect(() => {
  //   // console.log(props.isEdit)
  //   // if (props.isEdit) {
  //   //   authorRef.current.setAttribute('value', props.dataBook.Author)
  //   //   pageRomRef.current.setAttribute('value', props.dataBook.PageRomawi)
  //   //   pageRef.current.setAttribute('value', props.dataBook.Page)
  //   // } else {
  //   //   titleRef.current.setAttribute('value', '')
  //   //   authorRef.current.setAttribute('value', '')
  //   //   pageRomRef.current.setAttribute('value', '')
  //   //   pageRef.current.setAttribute('value', '')
  //   // }
  //   authorRef.current.setAttribute('value', props.dataBook.Author)
  //   pageRomRef.current.setAttribute('value', props.dataBook.PageRomawi)
  //   pageRef.current.setAttribute('value', props.dataBook.Page)
  // }, [props.isEdit])

  return (
    <>
      <input type="checkbox" id="my_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box absolute top-20">
          <h3 className="font-bold text-lg py-2">Tambah Buku</h3>
          <form method="dialog">
            {/* {(props.isEdit) ? (
              <label htmlFor="my_modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={props.closeEdit}>✕</label>
            ) : (
              <label htmlFor="my_modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={props.closeModal}>✕</label>
            )} */}
            <label htmlFor="my_modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={props.closeModal}>✕</label>
          </form>
          {
            (props.message !== '') ?
              <div role="alert" className="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{props.message}</span>
              </div>
              :
              (<div></div>)
          }

          <form className="flex flex-col" method="POST" onSubmit={props.submit}>
            <div className="my-1">
              {(props.isEdit) ? (
                <p className="flex justify-between m-2"><span>Judul:</span> <span>{props.dataBook.Title}</span></p>
              ) : (
                <input className="input" type="text" onChange={props.change} name="Title" placeholder="Judul Buku" ref={titleRef} value={props.dataBook.Title} />
              )}
            </div>
            <div className="my-1">
              <input className="input" type="text" onChange={props.change} name="Author" placeholder="Nama Penulis" ref={authorRef} value={props.dataBook.Author}/>
            </div>
            <div className="my-1">
              <input className="input" type="text" onChange={props.change} name="PageRomawi" placeholder="Halaman Romawi" ref={pageRomRef} value={props.dataBook.PageRomawi}/>
            </div>
            <div className="my-1">
              <input className="input" type="text" onChange={props.change} name="Page" placeholder="Halaman Isi" ref={pageRef} value={props.dataBook.Page}/>
            </div>
            <div className="my-1 flex flex-row-reverse">
              <button type="submit" className="btn btn-primary">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}