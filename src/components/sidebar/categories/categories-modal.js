import '../../../styles/global.scss'

export default function CategoriesModal({active, setActive, changeInput, addCategories}){

    const setDeafault = () => {
        inputs.value = ''
        inputs.style.border = '1px solid rgba(40, 40, 70, 0.1)'
        document.querySelector('.warning').style.opacity = '0'
        setActive(false)
    }

    const inputs = document.querySelector('input')

    return(
        <div className={active ? 'modal active':'modal'} onClick={() => setDeafault()}>
            <div className='modal__body' onClick={e => e.stopPropagation()}>
                <form className='modal__form' id='1'>
                    <h4>Добавить новую категорию</h4>
                    <div className='modal__inputs'>
                        <div className='modal__text'>
                            <p>Название категории:</p>
                            <input 
                                className='cat-input'
                                onChange={e =>{ 
                                    changeInput(e.target.value)
                                    if(e.target.value.length >= 12){
                                        e.target.style.border = '1px solid red'
                                        document.querySelector('.warning').style.opacity = '1'
                                    } else{
                                        e.target.style.border = '1px solid rgba(40, 40, 70, 0.1)'
                                        document.querySelector('.warning').style.opacity = '0'
                                    }
                                }} 
                                placeholder='Введите название категории'
                            />
                            <p className='warning'>Слишком длинное название категории</p>
                        </div>
                        <div className='modal__ico'>
                            <p>Иконка категории:</p>
                            <div className='modal__ico-body'>
                                <i className="fa-solid fa-user-group"><input type='checkbox'/></i>
                                <i className='fa-solid fa-suitcase'><input type='checkbox'/></i>
                                <i className="fa-solid fa-dumbbell"><input type='checkbox'/></i>
                                <i className="fa-solid fa-house"><input type='checkbox'/></i>
                                <i className="fa-solid fa-graduation-cap"><input type='checkbox'/></i>
                            </div>
                        </div>
                    </div>
                    <div className='modal__btns'>
                        <button 
                            onClick={e => {
                                e.preventDefault()
                                setDeafault()
                            }} 
                            className='modal__btn-cnsl'>Отменить</button>
                        <button
                            onClick={e => {
                                e.preventDefault()
                                addCategories()
                                setDeafault()
                            }} 
                            className='modal__btn-sbmt'>Добавить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}