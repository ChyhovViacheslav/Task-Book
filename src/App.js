import './styles/global.scss'
import Sidebar from './components/content/sidebar/sidebar';
import Content from './components/content/content';
import { useState, useEffect } from 'react';
import { useLocalStorage } from './components/services/services';

import home from './assets/icons/home.svg'
import Burger from './components/content/burger/burger';


export default function App() {
  const [categories, changeCategories] = useLocalStorage('categories', [{id: 12314, icon: home.slice(14, -37), name: 'Дом'}])
  const [target, setTarget] = useState('')
  const [burgerIsTogle, setBurgerTogle] = useState(false)
  const [isModalActive, setModalActive] = useState(false)

  useEffect(() => {
    setTarget(categories[0].name)
  }, [categories])

  const toggleTarget = (index) => {
    document.querySelectorAll('.categories-item').forEach((el) => {
        el.classList.remove('target')
    })
    
    document.querySelectorAll('.categories-item')[index].classList.add('target')
  }

  return (
    <main className='page'>
        <div className='page__body'>
          <Sidebar 
            setTarget={setTarget}
            categories={categories}
            changeCategories={changeCategories}
            toggleTarget={toggleTarget}
            setModalActive={setModalActive}
            isModalActive={isModalActive}>
          </Sidebar> 
          <Content
            target={target}
            toggleTarget={toggleTarget}
            setTarget={setTarget}
            categories={categories}
            changeCategories={changeCategories}
            burgerIsTogle={burgerIsTogle}
            setBurgerTogle={setBurgerTogle}/>
        </div>
        <Burger
          burgerIsTogle={burgerIsTogle}
          setBurgerTogle={setBurgerTogle}
          isModalActive={isModalActive}
          setModalActive={setModalActive}
          setTarget={setTarget}
          categories={categories}
          toggleTarget={toggleTarget}
          target={target}/>
    </main>
  );
}
