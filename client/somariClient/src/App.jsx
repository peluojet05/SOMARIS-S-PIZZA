import { useState } from 'react'
import './styles/App.css'

const Likes = ({likes}) => {

  const state = useState(0);
  console.log(state);
  
  return 
  <button onClick={() =>{}}>{likes}likes</button>
}
const App = () => {
  const [count, setCount] = useState(0)//para el 2do state

  return (
    <>
      <button>nasosasadnio</button>
      <div> 
        <Likes likes ={12}/>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
