import Navbar from './../../layout/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-center h-screen'>
        <div className='flex justify-center text-6xl my-5'>
          <FontAwesomeIcon icon={faBook} />
        </div>
        <h1 className='mx-5 flex justify-center'>Welcome di note Reads, Silahkan klik Navbar di bawah</h1>
      </div>
      <Navbar></Navbar>
    </>
  )
}