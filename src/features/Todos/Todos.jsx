import clsx from 'clsx';
import { useEffect, useState, useRef } from 'react';
import { configureApi } from '../../helpers/api.helper';
import styles from './Todos.module.css';

const api = configureApi('todos');

export function Todos() {
  const [todos, setTodos] = useState(null);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const titleRef = useRef();

  useEffect(() => {
    async function getTodos() {
      const data = await api.get();

      setTodos(data);
    }

    getTodos();
  }, []);

  function handleTitleChange(e) {
    setError('');
    setTitle(e.target.value);
  }

  async function handleAddTodo(e) {
    e.preventDefault();

    if (!title) {
      setError('Please provide a todo item.');
      return;
    }

    const todo = await api.add({ title, completed: false });

    // const newTodos = [...todos];
    // newTodos.push(todo);
    // setTodos(newTodos);

    setTodos([...todos, todo]);
    setTitle('');
    titleRef.current.focus();
  }

  async function handleDeleteTodo(todoId) {
    await api.remove(todoId);

    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  async function handleCompleteTodo(e, todo) {
    todo.completed = e.target.checked;
    setTodos([...todos]);

    api.update(todo.id, { completed: e.target.checked });
  }

  return (
    <>
      <h1>Todos</h1>
      <form
        onSubmit={handleAddTodo}
        className={clsx({ [styles['is-invalid']]: error })}
        noValidate
      >
        <label htmlFor="title">What do you want to do?</label>
        <input
          type="text"
          id="title"
          name="title"
          ref={titleRef}
          value={title}
          onChange={handleTitleChange}
          required
        />
        <button type="submit">Add Todo Item</button>
        {error && <p className={styles['error-message']}>{error}</p>}
      </form>
      <ul className={styles.todoList}>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                onChange={(e) => handleCompleteTodo(e, todo)}
                checked={todo.completed}
              />
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
