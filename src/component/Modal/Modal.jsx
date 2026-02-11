import React, { useEffect } from "react";
import ModalBox from "./ModalBox/ModalBox";

export default function Modal(props) {
  return (
    <>
      <input type="checkbox" id="my_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <ModalBox
          closeModal={props.closeModal}
          message={props.message}
          submit={props.submit}
          isEdit={props.isEdit}
          dataBook={props.dataBook}
          change={props.change}

          changeRadio={props.changeRadio}
          onSubmitEdit={props.onSubmitEdit}
          radio={props.radio}
          loading={props.loading}
        />
     </div>
    </>
  )
}