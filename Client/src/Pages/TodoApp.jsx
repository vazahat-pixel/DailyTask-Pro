import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Pages/TodoApp.css';



const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(null);

  useEffect(() => {
   try{
    axios.get('http://localhost:5000/api/todos')
    .then(res=>{
      setTodos(res.data);
    })
   }catch(err){
    console.log(err);
   }},[todos]);

    const addOrUpdateTodo = () => {
    if (task.trim() === '') return;

    if (editId){
      axios.put(`http://localhost:5000/api/todos/${editId}`, { title: task })
      .then(res=>{
        const updatedTodos = todos.map((todo, i) =>
        i === editId ? res.data : todo
      );
      setTodos(updatedTodos);
      setEditId(null);
      setTask('');
    });
     } else {
      axios.post('http://localhost:5000/api/todos', { title: task })
      .then(res=>{
        setTodos([...todos, res.data]);
        setTask('');
      });

    }

  };

  const editTodo = (todos) => {
    setTask(todos.title);
    setEditId(todos.id);
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/api/todos/${id}`)
    .then(res=>{
      setTodos(todos.filter((todos) => todos.id !== id  ));
    });
   
  };

  return (
   <div className="todo-container">
  <h2 className="todo-title">React TODO App (with Edit + LocalStorage)</h2>

  <div className="input-section">
    <input
      className="todo-input"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="Enter task"
    />
    <button className="todo-button" onClick={addOrUpdateTodo}>
      {editId ? 'Update' : 'Add'}
    </button>
  </div>

  <ul className="todo-list">
    {todos.map((todo) => (
      <li className="todo-item" key={todo._id}>
        <span>{todo.title}</span>
        <div>
          <button className="edit-btn" onClick={() => editTodo(todo)}>✏️</button>
          <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>❌</button>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
};

export default App;
