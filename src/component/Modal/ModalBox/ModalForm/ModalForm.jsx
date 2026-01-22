import FormSubmit from "./FormSubmit/FormSubmit"
import FormInput from "./FormInput/FormInput"

export default function ModalForm(props) {
  const formInput = [
    {
      name: 'Author',
      placeholder: 'Nama Penulis',
      type: 'text'
    },
    {
      name: 'PageRomawi',
      placeholder: 'Halaman Romawi',
      type: 'text'
    },
    {
      name: 'Page',
      placeholder: 'Halaman Isi',
      type: 'text'
    }
  ]
  return (
    <form className="flex flex-col" method="POST" onSubmit={props.submit}>
      <div className="my-1">
        {(props.isEdit) ? (
          <p className="flex justify-between m-2"><span>Judul:</span> <span>{props.dataBook.Title}</span></p>
        ) : (
          <input className="input" type="text" onChange={props.change} name="Title" placeholder="Judul Buku" value={props.dataBook.Title} />
        )}
      </div>
      {formInput.map((input, index) => (
        <FormInput
          key={index}
          onChange={props.change}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          value={props.dataBook[input.name] || ""}
        />
      ))}
      <FormSubmit />
      
    </form>
  )
}