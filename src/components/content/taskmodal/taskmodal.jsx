import '../../../styles/global.scss';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../../theme/ThemeProvider';
import { IconSelector } from '../../../assets/icons/icons';

export default function TaskModal({ categories, addTask, active, setActive, setTask, setCategory, category, task, createdTask, incTask }) {
    const [value, setValue] = useState(null);
    const refInput = useRef()
    const refWarn = useRef()
    const categoryRef = useRef()
    const whenRef = useRef()
    const { type } = useContext(ThemeContext)

    const changeBorderColor = (el) => {
        el.current.style.border = '1px solid #F05454'
    }

    const defaultBorderColor = (el) => {
        el.forEach(el => el.current.style.border = '')
    }

    const setDefault = () => {
        defaultBorderColor([refInput, categoryRef, whenRef])

        refWarn.current.style.opacity = '0'
        setActive(false)
        setTask('')
        refInput.current.value = ''
    }

    const categoriesName = categories.map((item, index) => {
        const { name, id } = item
        return (
            <option key={id} value={index}>{name}</option>
        )
    })

    return (
        <div className={active ? 'task-modal show' : 'task-modal'} onClick={() => setDefault()}>
            <div className={type ? 'task-modal__body' : 'task-modal__body dark'} onClick={(e) => e.stopPropagation()}>
                <form className='task-modal__form'>
                    <h4>Добавить новую задачу</h4>
                    <div className={type ? 'task-modal__inputs' : 'task-modal__inputs dark'}>
                        <div className='task-modal__task'>
                            <p>Что нужно сделать?</p>
                            <input
                                className='task-modal__input'
                                ref={refInput}
                                onChange={e => {
                                    if (e.target.value.length >= 50) {
                                        refWarn.current.style.opacity = '1'
                                        refWarn.current.textContent = 'Слишком длинное название задачи'
                                        changeBorderColor(refInput)
                                    } else if (e.target.value.length === 0) {
                                        refWarn.current.style.opacity = '1'
                                        refWarn.current.textContent = 'Пустое значение'
                                        setTask('')
                                    } else {
                                        refWarn.current.style.opacity = '0'
                                        defaultBorderColor([refInput])
                                        setTask(e.target.value)
                                    }
                                }}
                                type='text' />
                            <p
                                className='warning-task'
                                ref={refWarn}>
                                Слишком длинное название задачи
                            </p>
                        </div>
                        <div className='task-modal__categories'>
                            <div className='task-modal__category-item'>
                                <p>Категория</p>
                                <select
                                    className={type ? 'task-modal__select' : 'task-modal__select dark'}
                                    defaultValue='DEF'
                                    ref={categoryRef}
                                    onChange={(e) => {
                                        setCategory(e.target.selectedOptions[0].text)
                                    }}>
                                    <option value='DEF' hidden>Выбрать</option>
                                    {categoriesName}
                                </select>
                                <IconSelector className='ico' id={'chevron-down'} />
                            </div>
                            <div className='task-modal__category-item'>
                                <p>Когда?</p>
                                <input
                                    ref={whenRef}
                                    className='calendar'
                                    type='date'
                                    min={new Date().toJSON().slice(0, 10)}
                                    max='2100-12-30'
                                    onChange={(e) => {
                                        setValue(new Date(e.target.value))
                                    }} />
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

                                if (!task || task.length >= 50) {
                                    changeBorderColor(refInput)
                                } else if (task === '') {
                                    changeBorderColor(refInput)
                                    defaultBorderColor([categoryRef, whenRef])
                                } else if (category === '') {
                                    changeBorderColor(categoryRef)
                                    defaultBorderColor([refInput, whenRef])
                                } else if (value === null) {
                                    changeBorderColor(whenRef)
                                    defaultBorderColor([refInput, categoryRef])
                                } else {
                                    addTask(value)
                                    setDefault()
                                    incTask(++createdTask)
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