import '../../styles/global.scss'
import { DateTimePicker } from '@mui/x-date-pickers'
import { useState } from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function TaskModal ({addTask, active, setActive, setTask, setCategory, category, task, createdTask, incTask}){
    const [value, setValue] = useState(Date.now());

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    const setDefault = () => {
        inputs.value = ''
        inputs.style.border = '1px solid rgba(40, 40, 70, 0.1)'
        document.querySelector('.task-modal__select')
        document.querySelector('.warning-task').style.opacity = '0'
        setActive(false)
    }

    const inputs = document.querySelector('.task-modal__input')

    const categoriesName = JSON.parse(localStorage.getItem('categories')).map((item, index) => {
        const {name} = item
        return (
            <option key={name} value={index}>{name}</option>
        )
    })

    return (
        <div className={active ? 'task-modal active' : 'task-modal'} onClick={() => setDefault()}>
            <div className='task-modal__body' onClick={(e) => e.stopPropagation()}>
                <form className='task-modal__form'>
                    <h4>Добавить новую задачу</h4>
                    <div className='task-modal__inputs'>
                        <div className='task-modal__task'>
                            <p>Что нужно сделать?</p>
                            <input
                                className='task-modal__input' 
                                onChange={e =>{ 
                                    setTask(e.target.value)
                                    if(e.target.value.length >= 50){
                                        e.target.style.border = '1px solid red'
                                        document.querySelector('.warning-task').style.opacity = '1'
                                    } else{
                                        e.target.style.border = '1px solid rgba(40, 40, 70, 0.1)'
                                        document.querySelector('.warning-task').style.opacity = '0'
                                    }
                                }}
                                type='text'/>
                            <p className='warning-task'>Слишком длинное название задачи</p>
                        </div>
                        <div className='task-modal__categories'>
                            <div className='task-modal__category-item'>
                                <p>Категория</p>
                                <select 
                                    className='task-modal__select'
                                    defaultValue='DEF'
                                    onChange={(e) => {
                                        setCategory(e.target.selectedOptions[0].text)
                                        }}>
                                        <option value='DEF' hidden>Выбрать</option>
                                        {categoriesName}
                                </select>
                            </div>
                            <div className='task-modal__category-item'>
                                <p>Когда?</p>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DateTimePicker 
                                        renderInput={(params) => <TextField {...params}/>} 
                                        label='' 
                                        onChange={handleChange} 
                                        value={value}/>
                                    </LocalizationProvider>
                            </div>
                            <div className='task-modal__category-item'>
                                <p>Приоритет</p>
                                <select defaultValue='DEF' className='task-modal__select'>
                                    <option value='DEF' hidden>Выбрать</option>
                                    <option value='hight'>Высокий</option>
                                    <option value='low'>Низкий</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='task-modal__btns'>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                setDefault()
                            }} 
                            className='task-modal__btn-cnsl'>
                                Отменить
                        </button>
                        <button 
                            className='task-modal__btn-sbmt'
                            onClick={(e) => {
                                e.preventDefault()
                                if(category !== '' && task !==''){
                                    addTask(value)
                                    setDefault()
                                    incTask(++createdTask)
                                }else{
                                    console.log('Пустое значение')
                                }
                            }}>
                                Добавить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}