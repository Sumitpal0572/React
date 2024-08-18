import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => console.log(count1), 2000)

    return () => {
      clearInterval(timer)
    }

  }, [count1])

  return (

    <div>
      <button onClick={() => setCount1(count1 + 1)}>Increment1</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment2</button>

    </div>


  )

}
export default App;
