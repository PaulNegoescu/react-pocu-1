import { Routes, Route } from 'react-router-dom';
import {
  Counter,
  Weather,
  Auth,
  Home,
  AuthContextProvider,
  Todos,
  FilmsLayout,
} from '~/features';
import { Nav, NotFound } from '~/components';

import './App.css';

export function App() {
  return (
    <AuthContextProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter initialStep={2} />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/films/*" element={<FilmsLayout />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
}
