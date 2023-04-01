import { Routes, Route } from 'react-router-dom';
import { Counter, Weather, Todos } from '../../features';
import { Nav, NotFound } from '../';

import './App.css';

export function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/counter" element={<Counter initialStep={2} />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
