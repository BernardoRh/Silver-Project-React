import clsx from 'clsx';
import { ThemeConsumer } from 'styled-components';
import './styles/global.css';

export default function App() {
  const city = 'Martlock';
  const paragrath = `flex items-center justify-center w-screen h-screen bg-game-citys-${city}`;

  return (
    <div className={paragrath}>
      <p>{paragrath}</p>
    </div>
  )
}