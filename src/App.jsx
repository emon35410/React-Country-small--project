import { Suspense } from 'react'
import './App.css'
import Countries from './component/Countries/Countries'

const countriePromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res=>res.json())
function App() {

  return (
    <>
      <Suspense fallback={<h1>Let Me Tell You Something</h1>}>
        <Countries  countriePromise={countriePromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
