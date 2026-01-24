import FormSubmit from "./FormSubmit/FormSubmit"
import FormInput from "./FormInput/FormInput"
import FormRadio from "./FormRadio/FormRadio"
import { useLocation } from "react-router"
import { useEffect } from "react"

export default function ModalForm(props) {
  let formInputBooks = [
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

  let formRadioReadings = [
    {
      option: 'Romawi Page',
    },
    {
      option: 'Page',
    }
  ]

  // useEffect(() => {
  //   console.log(props.dataBook)
  // }, [props.dataBook])


  return (
    <form className="flex flex-col" method="POST" onSubmit={props.submit}>

      {/* books */}
      {/* <div className="my-1">
        {(props.isEdit) ? (
          <p className="flex justify-between m-2"><span>Judul:</span> <span>{props.dataBook.Title}</span></p>
        ) : (
          <input className="input" type="text" onChange={props.change} name="Title" placeholder="Judul Buku" value={props.dataBook.Title} />
        )}
      </div>
      {formInputBooks.map((input, index) => (
        <FormInput
          key={index}
          onChange={props.change}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          value={props.dataBook[input.name] || ""}
        />
      ))} */}

      {/* readings */}
      {/* <FormRadio name='Romawi' option='Romawi Page' checked='' change='' />
      <FormRadio name='Romawi' option='Romawi Page' /> */}
      <div className='flex'>
        {formRadioReadings.map((read, index) => (
          <FormRadio
            key={index}
            name='choice'
            option={read.option}
            changeRadio={props.changeRadio}
            checked={props.radio === read.option}
          />
        ))}
      </div>

      <div className='flex items-center justify-around'>
        <FormInput
          type={props.type}
          onChange={props.change}
          name='ReadingNumber'
          placeholder='Halaman'
          value={props.dataBook.ReadingNumber}
        />
        <p>/ {props.dataBook.PageRomawi} Halaman</p>
      </div>

      <FormSubmit />

    </form>
  )
}