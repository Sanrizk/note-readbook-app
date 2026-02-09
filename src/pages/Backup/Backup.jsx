import { useEffect, useState } from 'react'
import Navbar from './../../layout/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

export default function Backup() {
  const [routes, setRoutes] = useState('')
  useEffect(() => {
    let route = location.pathname
    let routeSlice = route.slice(0, 0) + route.slice(0 + 1)
    let capitalized = routeSlice.charAt(0).toUpperCase() + routeSlice.slice(1)
    setRoutes(capitalized)
  }, [])

  return (
    <>
      <div className='flex flex-col justify-center h-screen'>
        <div className='flex justify-center text-6xl my-5'>
          <FontAwesomeIcon icon={faDatabase} />
        </div>
        <h1 className='mx-5 flex justify-center'>Backup Page Soon Will be Done</h1>
      </div>
      <Navbar routes={routes}></Navbar>
    </>
  )
}