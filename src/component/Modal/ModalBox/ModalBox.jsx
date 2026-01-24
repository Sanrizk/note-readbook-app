import ModalClose from './ModalClose/ModalClose'
import ModalAlert from './ModalAlert/ModalAlert'
import ModalForm from './ModalForm/ModalForm'

export default function ModalBox(props) {
  return (
    <div className="modal-box absolute top-20">
      <h3 className="font-bold text-lg py-2">Tambah Buku</h3>
      <ModalClose closeModal={props.closeModal} />
      {(props.message !== '') ? (<ModalAlert message={props.message} />) : (<div></div>)}
      <ModalForm   
        submit={props.submit} 
        isEdit={props.isEdit} 
        dataBook={props.dataBook} 
        change={props.change}

        changeRadio={props.changeRadio}
        radio={props.radio}
      />
    </div>
  )
}