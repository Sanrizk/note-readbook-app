import { useLocation } from "react-router"
import CardBodyButton from "./CardBodyButton/CardBodyButton"

export default function CardBody(props) {
  // reads
  // heading judul buku
  // progress
  // halaman
  // button
  let className = ''
  if (useLocation().pathname === '/readings') {
    className = 'card-body w-1/2'
  } else if (useLocation().pathname === '/books') {
    className = 'card-body'
  } else {
    className = ''
  }

  // reading number masih aneh logikanya
  const persentaseRead = parseInt((Number((props.status.IsPage) ? props.pageRomawi : 0) + Number(props.readingNumber)) / (Number(props.pageRomawi) + Number(props.page)) * 100)
  let classPersentase = ''
  if (persentaseRead > 70 && persentaseRead <= 99) {
    classPersentase = 'progress-info'
  } else if (persentaseRead > 30 && persentaseRead <= 70) {
    classPersentase = 'progress-warning'
  } else if (persentaseRead <= 30) {
    classPersentase = 'progress-error'
  } else if (persentaseRead == 100) {
    classPersentase = 'progress-success'
  } else {
    classPersentase = ''
  }

  return (
    // <div className="card-body">
    <div className={className}>
      <h2 className="card-title">{props.title}</h2>

      {(useLocation().pathname === '/books') && (
        <>
          <p>{props.author} - {props.page} Halaman</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quae ducimus iure est voluptates alias accusantium sunt consectetur optio neque.</p>
        </>
      )}

      {(useLocation().pathname === '/readings') && (
        <>
          <p>{props.readingNumber} / {props.page} Halaman ({persentaseRead}%)</p>
          {/* error <30%, warning <70%, info <99%, success 100% */}
          <progress className={'lg:w-1/2 progress ' + classPersentase} value={persentaseRead} max="100"></progress>
        </>
      )}

      <CardBodyButton
        onClickEdit={props.onClickEdit}
        onClickDelete={props.onClickDelete}
        isRead={props.isRead}
        checked={props.checked}
        changeChecked={props.changeChecked}
        slug={props.slug}
        index={props.index}
      />
    </div>
  )
}