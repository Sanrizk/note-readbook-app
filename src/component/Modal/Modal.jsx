import React, { useEffect, useRef } from "react";

export default function Modal(props) {
  const authorRef = useRef()
  const pageRomRef = useRef()
  const pageRef = useRef()

  useEffect(() => {
    console.log(props.isEdit)
    if (props.isEdit) {
      authorRef.current.setAttribute('value', props.dataBook.Author)
      pageRomRef.current.setAttribute('value', props.dataBook.PageRomawi)
      pageRef.current.setAttribute('value', props.dataBook.Page)
    } else {
      authorRef.current.removeAttribute('value')
      pageRomRef.current.removeAttribute('value')
      pageRef.current.removeAttribute('value')
    }
  }, [props.isEdit])

  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box absolute top-20">
          <h3 className="font-bold text-lg py-2">Tambah Buku</h3>

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
                <input className="input" type="text" onChange={props.change} name="Title" placeholder="Judul Buku" />
              )}
            </div>
            <div className="my-1">
              <input className="input" type="text" onChange={props.change} name="Author" placeholder="Nama Penulis" ref={authorRef} />
            </div>
            <div className="my-1">
              <input className="input" type="text" onChange={props.change} name="PageRomawi" placeholder="Halaman Romawi" ref={pageRomRef} />
            </div>
            <div className="my-1">
              <input className="input" type="text" onChange={props.change} name="Page" placeholder="Halaman Isi" ref={pageRef} />
            </div>
            <div className="my-1 flex flex-row-reverse">
              <button type="submit" className="btn btn-primary">Simpan</button>
            </div>
          </form>
          <p className="py-2">Tekan ESC di keyboard atau Klik luar untuk menutup</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          {(props.isEdit) ? (
            <button onClick={props.closeEdit}>close</button>
          ) : (
            <button onClick={props.closeModal}>close</button>
          )}
        </form>
      </dialog>
    </>
  )
}