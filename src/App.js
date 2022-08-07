import './styles/global.scss';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/content';
import { useRef, useState } from 'react';

export default function App() {
  const [target, setTarget] = useState('Дом')

  return (
    <main className='page'>
      <Sidebar setTarget={setTarget}/>
      <Content target={target}/>
    </main>
  );
}
