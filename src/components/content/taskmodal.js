import '../../styles/global.scss'
import { DateTimePicker } from '@mui/x-date-pickers'
import { useState } from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function TaskModal ({active, setActive}){
    const [value, setValue] = useState(Date.now());

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    const categoriesName = JSON.parse(localStorage.getItem('categories')).map((item, index) => {
        const {name} = item
        return (
            <option key={name} value={index}>{name}</option>
        )
    })

    return (
        <div className={active ? 'task-modal active' : 'task-modal'} onClick={() => {
            setActive(false)
        }}>
            <div className='task-modal__body' onClick={(e) => e.stopPropagation()}>
                <form className='task-modal__form'>
                    <h4>Добавить новую задачу</h4>
                    <div className='task-modal__inputs'>
                        <div className='task-modal__task'>
                            <p>Что нужно сделать?</p>
                            <input type='text'/>
                        </div>
                        <div className='task-modal__categories'>
                            <div className='task-modal__category-item'>
                                <p>Категория</p>
                                <select defaultValue='DEF' className='task-modal__select'>
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
                                setActive(false)
                            }} 
                            className='task-modal__btn-cnsl'>
                                Отменить
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                            }} 
                            className='task-modal__btn-sbmt'>
                                Добавить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}