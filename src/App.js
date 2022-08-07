import './styles/global.scss';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/content';
import { useState } from 'react';
import { useLocalStorage } from './components/services/services';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const [categories, changeCategories] = useLocalStorage('categories', [{icon: faHouse, name: 'Дом'}])
  const [target, setTarget] = useState('Дом')

  const toggleTarget = (index) => {
    document.querySelectorAll('.categories-item').forEach((el) => {
        el.classList.remove('target')
    })
    
    document.querySelectorAll('.categories-item')[index].classList.add('target')
}

  return (
    <main className='page'>
      <Sidebar 
        setTarget={setTarget}
        categories={categories}
        changeCategories={changeCategories}
        toggleTarget={toggleTarget}/>
      <Content
        toggleTarget={toggleTarget}
        target={target}
        setTarget={setTarget}
        categories={categories}
        changeCategories={changeCategories}/>
    </main>
  );
}
