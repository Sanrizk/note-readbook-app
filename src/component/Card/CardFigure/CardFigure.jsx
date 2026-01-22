import { useLocation } from "react-router"

export default function CardFigure(props) {
  let classNameFigure = ''
  if (useLocation().pathname === '/readings') {
    classNameFigure = 'w-1/3 lg:w-1/6'
  } else if (useLocation().pathname === '/books') {
    classNameFigure = 'lg:w-64'
  } else {
    classNameFigure = ''
  }

  return (
    <figure className={classNameFigure}>
      <img
        src={props.img}
        alt="Album" />
    </figure>
  )
}