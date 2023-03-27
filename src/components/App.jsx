import { Counter } from '../features/Counter/Counter';
import { Weather } from '../features/Weather/Weather';

export function App() {
  return (
    <>
      <Counter initialStep={2} />
      <Weather />
    </>
  );
}
