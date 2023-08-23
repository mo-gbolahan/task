import "./inputfield.style.css";

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
}

const InputField = ({todo, setTodo}: Props) => {
  return (
    <form className="input">
      <input type='text' placeholder='Enter a task' value={todo}  onChange={e => setTodo(e.target.value)}className='input__box'/>
      <button type='submit' className='input__submit'>Go</button>
    </form >
  )
};

export default InputField;
