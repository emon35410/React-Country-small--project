import { Suspense } from 'react'
import './App.css'
import Countries from './component/Countries/Countries'

const countriePromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res=>res.json())
function App() {

  return (
    <>
      <Suspense fallback={<h2>BIIIIIIG JEEEEEL</h2>}>
        <Countries  countriePromise={countriePromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
