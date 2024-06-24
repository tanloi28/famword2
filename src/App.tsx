
import './App.css'

function App() {
  const data = [
    {name: 'tanloi', age:28},
    {name: 'tanloi', age:28},
    {name: 'tanloi', age:28},
    {name: 'tanloi', age:28},
  ]
  return (
    
<div>
  <ul>
    {data.map((item, index)=>{
    <li key={index}>{item.name}</li>

    })}
  </ul>
  </div> 
  )
}

export default App
