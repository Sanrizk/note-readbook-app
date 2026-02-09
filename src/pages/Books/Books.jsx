import { useState, useEffect } from 'react';
import './Books.css'
import Navbar from '../../layout/navbar/Navbar'
import Content from '../../layout/body/Content'
import { useLocation } from 'react-router';

export default function Books() {
  const [routes, setRoutes] = useState('');
  const [books, setBooks] = useState([]);
  const [tokenBooks, setTokenBooks] = useState('asd237hs8')
  const [loading, setLoading] = useState(true)
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

  function secureRandomTextAndNumber(length) {
    if (typeof length !== "number" || length <= 0) {
      throw new Error("Length must be a positive integer.");
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    return Array.from(array, num => chars[num % chars.length]).join("");
  }

  useEffect(() => {
    let route = location.pathname
    let routeSlice = route.slice(0, 0) + route.slice(0 + 1)
    let capitalized = routeSlice.charAt(0).toUpperCase() + routeSlice.slice(1)
    setRoutes(capitalized)
  }, [])

  useEffect(() => {
    const fetching = async () => {
      const url = 'https://read-app-steel.vercel.app/api/books'
      const header = {
        'Content-Type': 'application/json',
        'x-api-key': 'df507b0fc3fa5fefab0430838d8d09d1f4f36915bf531528679231d91628e1d98874aad668f5520b90a8afb60b2cf83b5ae0fe338dd030206323bd2c8d1e9aba'
      }
      try {
        const resBooks = await fetch(url, { method: 'GET', headers: header }).then(res => res.json())
        setBooks(resBooks.data)
        setLoading(false)
      } catch (err) {
        console.error(err)
      }
    }

    fetching()
  }, [tokenBooks])

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
      // setBooks([...books, newBook.data])
      // console.log(newBook)
      setTokenBooks(secureRandomTextAndNumber(12))
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
      await fetch(`${url}/${slug}`, { method: 'DELETE', headers: header }).then(res => res.json())
      // console.log(response)
      setTokenBooks(secureRandomTextAndNumber(12))
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
      const indexBook = books.findIndex(book => book.Slug === slug)
      const newBook = await fetch(`${url}/${slug}`, { method: 'PUT', headers: header, body: JSON.stringify(book) }).then(res => res.json())
      setMessage(newBook.message)
      // console.log(newBook)
      // let oldBooks = books
      // oldBooks.splice(indexBook, 1)
      // oldBooks[indexBook] = book
      // setBooks(oldBooks)
      setTokenBooks(secureRandomTextAndNumber(12))
    } catch (err) {
      console.error(err)
    }

  }
  // form input
  return (
    <>
      {(loading) && (
        <div className='flex flex-col justify-center h-screen items-center'>
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      )}
      <Content
        books={books}
        edit={edit}
        onChangeBook={onChangeBook}
        book={book}
        toggleModal={toggleModal}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
        onSubmitAdd={onSubmitAdd}
        onSubmitEdit={onSubmitEdit}
        onClickCloseModal={onClickCloseModal}
        onClickCloseEdit={onClickCloseEdit}
        message={(message === '') ? '' : message}
      />
      <div className="h-20"></div>
      <Navbar routes={routes}></Navbar>
    </>
  )
}