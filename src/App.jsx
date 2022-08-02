import React,{ useState } from 'react'
function App() {
  const [contador, setContador] = useState(0)

  return (
    <div>
      <h1>Cliques:{contador}</h1>
        <button onClick={() => setContador((contador) => contador + 1)}>
          Clique! 
        </button>

    </div>
  )
}

export default App
