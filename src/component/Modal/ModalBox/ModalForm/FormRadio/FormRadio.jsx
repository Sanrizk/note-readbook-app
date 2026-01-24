import { useEffect } from "react"

export default function FormInput(props) {
  useEffect(() => {
    console.log(props.checked)
  }, [props.checked])
  
  return (
    <div className="my-1 mx-3">
      <label>
        <input
          className="radio me-3"
          type="radio"
          // onChange={props.onChange}
          name={props.name}
          value={props.option}
          checked={props.checked}
          onChange={props.changeRadio}
        /> 
        {props.option}
      </label>
    </div>
  )
}