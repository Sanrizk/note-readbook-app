import './App.css'
import Navbar from './layout/navbar/Navbar'
import Content from './layout/body/Content'

export default function App() {
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/books', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'x-api-key': 'df507b0fc3fa5fefab0430838d8d09d1f4f36915bf531528679231d91628e1d98874aad668f5520b90a8afb60b2cf83b5ae0fe338dd030206323bd2c8d1e9aba'
  //     }
  //   }).then(res => {
  //     if(!res.ok) {
  //       throw new Error(`Http Error: ${res.status}`)
  //     }
  //     return res.json()
  //   }).then(data => {
  //     console.log(data.data)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // },[])

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Test</h1> */}
      <Content></Content>
      <div className="h-20"></div>
      <Navbar></Navbar>
    </>
  )
}
