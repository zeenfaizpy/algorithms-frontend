import { useState } from 'react'
import './App.css'
import { fetchData } from './api.js'

function App() {
  const [n, setN] = useState(0)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])

  const onNumberChange = (e) => {
    setN(Number(e.target.value))
  }

  const generate = async () => {
    setLoading(true)
    setResult([])

    try {
      const data = await fetchData(n)
      console.log(data);
      setResult(data.result)
    } catch (err) {
      alert('Error in API Call')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="card">
        <h1>Number Generator Algorithm</h1>
        <div>
          <div className="row">
            <label>Enter Number</label>
            <input type="number" value={n} min={0} onChange={onNumberChange} />
            <button onClick={generate} disabled={loading}>{loading ? 'Generating…' : 'Generate'}</button>
          </div>
        </div>
        <div>Selected Number: <strong>{n}</strong></div>
        <div> Result is </div>
        <div>
          {
            result.map((num, index) => (
              <strong><span key={index}>{num} </span></strong>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
