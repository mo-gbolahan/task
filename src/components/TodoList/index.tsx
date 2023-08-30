import React from "react";
import "./todoList.style.css";
import Todo from "../../model";
import Card from "../Card";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todolist">
      {todos.map((todo) => (
        <Card key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
