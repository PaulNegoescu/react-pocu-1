import { useEffect, useState, useRef } from 'react';

export function Todos() {
  const [todos, setTodos] = useState(null);
  const [title, setTitle] = useState('');
  const titleRef = useRef();

  useEffect(() => {
    async function getTodos() {
      const data = await fetch('http://localhost:3000/todos').then((res) =>
        res.json()
      );

      setTodos(data);
    }

    getTodos();
  }, []);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  async function handleAddTodo(e) {
    e.preventDefault();

    const todo = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify({ title, completed: false }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());

    // const newTodos = [...todos];
    // newTodos.push(todo);
    // setTodos(newTodos);

    setTodos([...todos, todo]);
    setTitle('');
    titleRef.current.focus();
  }

  async function handleDeleteTodo(todoId) {
    await fetch(`http://localhost:3000/todos/${todoId}`, {
      method: 'DELETE',
    });

    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="title">What do you want to do?</label>
        <input
          type="text"
          id="title"
          name="title"
          ref={titleRef}
          value={title}
          onChange={handleTitleChange}
        />
        <button type="submit">Add Todo Item</button>
      </form>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" defaultChecked={todo.completed} />
              {todo.title}
            </label>
            <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
              &times;
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
