export default function FormInput(props) {
  return (
    <div className="my-1">
      <input
        className="input w-full"
        type={props.type}
        onChange={props.onChange}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  )
}