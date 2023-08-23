import { useState } from 'react'
import './App.css'
import InputField from './components/InputField/inputField'

const App: React.FC = () => {
 
  const [todo, setTodo] =useState<string>('');

  return (
    <div className="App">
    <span className="heading">Task</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App
