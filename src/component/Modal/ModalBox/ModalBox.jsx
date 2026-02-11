import ModalClose from './ModalClose/ModalClose'
import ModalAlert from './ModalAlert/ModalAlert'
import ModalForm from './ModalForm/ModalForm'

export default function ModalBox(props) {
  return (
    <div className="modal-box absolute top-20">
      <h3 className="font-bold text-lg py-2">{(props.isEdit) ? 'Ubah' : 'Tambah'} Buku</h3>
      <ModalClose closeModal={props.closeModal} />
      {(props.message !== '') ? (<ModalAlert message={props.message} />) : (<div></div>)}
      {(props.loading) ? <div className="m-2"><span className="loading loading-spinner loading-xs"></span><span className="mx-1 text-xs">Sedang Diproses...</span></div> : (<div></div>)}
      <ModalForm   
        submit={props.submit} 
        isEdit={props.isEdit} 
        dataBook={props.dataBook} 
        change={props.change}

        changeRadio={props.changeRadio}
        radio={(props.isEdit && props.dataBook.Status.IsPage) ? "Page" : props.radio}
      />
    </div>
  )
}