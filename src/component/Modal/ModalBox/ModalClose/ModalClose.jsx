export default function ModalClose(props) {
  return (
    <form method="dialog">
      <label htmlFor="my_modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={props.closeModal}>✕</label>
    </form>
  )
}