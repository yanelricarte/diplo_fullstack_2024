import React, { useEffect, useState } from 'react'

function Contador() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Has hecho clic ${count} veces`
  })

  return (
    <div>
      <span>El contador está a {count}</span> 
      <button onClick={() => setCount(count + 1)}>Incrementar contador</button>
    </div>
  )
}

export default Contador;