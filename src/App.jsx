import React, {Suspense, lazy } from 'react'
import './App.css'
import { Spinner } from 'react-bootstrap';
const Loading = lazy(() => import('./components/slides/Loading.js'));
function App() {
  return (
    <div className="App">
    <h1>Início</h1>
    <p>Em desenvolvimento...</p>
    <Suspense fallback={<Spinner />}>
          <h2>Preview</h2>
          <Loading />
      </Suspense>
    </div>
  )
}

export default App
