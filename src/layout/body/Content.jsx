import React, { useEffect, useState } from "react";
import Card from "../../component/Card/Card";
import FloatingActionButton from "../../component/FloatingActionButton/FloatingActionButton";
import Modal from "../../component/Modal/Modal";

export default function Content() {
  const [books, setBooks] = useState([]);
  const emptyBook = {
    Title: '',
    Author: '',
    PageRomawi: '',
    Page: '',
    Slug: ''
  }
  const [book, setBook] = useState(emptyBook)
  const [message, setMessage] = useState("")
  const [edit, setEdit] = useState(false)

  // useEffect(() => {
  //   console.log(book)
  // }, [book])

  useEffect(() => {
    const fetching = async () => {
      const url = 'https://read-app-steel.vercel.app/api/books'
      const header = {
        'Content-Type': 'application/json',
        'x-api-key': 'df507b0fc3fa5fefab0430838d8d09d1f4f36915bf531528679231d91628e1d98874aad668f5520b90a8afb60b2cf83b5ae0fe338dd030206323bd2c8d1e9aba'
      }
      try {
        const books = await fetch(url, { method: 'GET', headers: header }).then(res => res.json())
        setBooks(books.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetching()
  }, [])

  const toggleModal = () => document.getElementById('my_modal').showModal()

  const onSubmitAdd = async (e) => {
    e.preventDefault()
    const url = 'https://read-app-steel.vercel.app/api/books/add'
    const header = {
      'Content-Type': 'application/json',
      'x-api-key': 'df507b0fc3fa5fefab0430838d8d09d1f4f36915bf531528679231d91628e1d98874aad668f5520b90a8afb60b2cf83b5ae0fe338dd030206323bd2c8d1e9aba'
    }

    try {
      const newBook = await fetch(url, { method: 'POST', headers: header, body: JSON.stringify(book) }).then(res => res.json())
      setMessage(newBook.message)
      console.log(newBook)
    } catch (err) {
      console.error(err)
    }
  }

  const onChangeBook = (e) => {
    const { name, value } = e.target

    setBook(prevBook => {
      return { ...prevBook, [name]: value }
    })
  }

  const onClickDelete = async (slug) => {
    const url = 'https://read-app-steel.vercel.app/api/books/del'
    const header = {
      'Content-Type': 'application/json',
      'x-api-key': 'df507b0fc3fa5fefab0430838d8d09d1f4f36915bf531528679231d91628e1d98874aad668f5520b90a8afb60b2cf83b5ae0fe338dd030206323bd2c8d1e9aba'
    }

    try {
      const response = await fetch(`${url}/${slug}`, { method: 'DELETE', headers: header }).then(res => res.json())
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  const onClickEdit = (book) => {
    setBook(book)
    setEdit(!edit)
  }

  const onClickCloseEdit = () => {
    setEdit(!edit)
    setMessage('')
    setBook(emptyBook)
  }

  const onClickCloseModal = () => {
    setMessage('')
    setBook(emptyBook)
  }

  const onSubmitEdit = async (e, slug) => {
    e.preventDefault()
    const url = 'https://read-app-steel.vercel.app/api/books/edit'
    const header = {
      'Content-Type': 'application/json',
      'x-api-key': 'df507b0fc3fa5fefab0430838d8d09d1f4f36915bf531528679231d91628e1d98874aad668f5520b90a8afb60b2cf83b5ae0fe338dd030206323bd2c8d1e9aba'
    }

    try {
      const newBook = await fetch(`${url}/${slug}`, { method: 'PUT', headers: header, body: JSON.stringify(book) }).then(res => res.json())
      setMessage(newBook.message)
      console.log(newBook)
    } catch (err) {
      console.error(err)
    }

  }

  return (
    <>
      {books.map((book, index) => (
        <Card
          key={index}
          title={book.Judul}
          author={book.Author}
          page={book.Page}
          onClickDelete={() => onClickDelete(book.Slug)}
          onClickEdit={() => onClickEdit(book)}
        />
      ))}
      {
        (edit) ? (
          <Modal
            change={onChangeBook}
            submit={e => onSubmitEdit(e, book.Slug)}
            // closeEdit={onClickCloseEdit}
            dataBook={book}
            message={(message === '') ? '' : message}
            isEdit={edit}
            closeModal={onClickCloseEdit}
          ></Modal>
        ) : (
          <Modal
            change={onChangeBook}
            submit={onSubmitAdd}
            dataBook={book}
            message={(message === '') ? '' : message}
            isEdit={false}
            closeModal={onClickCloseModal}
          ></Modal>
        )
      }
      {/* <Modal change={onChangeBook} submit={onSubmitAdd}></Modal> */}
      <FloatingActionButton modal={toggleModal}></FloatingActionButton>
    </>
  )
}