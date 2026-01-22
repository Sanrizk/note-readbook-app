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
          <p>50 / 250 Halaman (70%)</p>
          <progress className="lg:w-1/2 progress" value="70" max="100"></progress>
        </>
      )}

      <CardBodyButton onClickEdit={props.onClickEdit} onClickDelete={props.onClickDelete} />
    </div>
  )
}