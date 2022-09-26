import './styles/global.scss'
import Sidebar from './components/content/sidebar/sidebar';
import Content from './components/content/content';
import { useState, useEffect } from 'react';
import { useLocalStorage } from './components/services/services';
import Burger from './components/content/burger/burger';

export default function App() {
  const [categories, changeCategories] = useLocalStorage('categories', [])
  const [target, setTarget] = useState('')
  const [burgerIsTogle, setBurgerTogle] = useState(false)
  const [isModalActive, setModalActive] = useState(false)
  const [categoriesIsExists, setCategories] = useState(false)

  useEffect(() => {
    if(categories.length === 1){
      setTarget(categories[0].name)
    }
  }, [categories.length, categories])

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
            categoriesIsExists={categoriesIsExists}
            setCategories={setCategories}
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
