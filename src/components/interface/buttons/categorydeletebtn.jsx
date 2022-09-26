import React from 'react'

function CategoryDeleteBtn({categories, setNewTask, changeCategories, setTarget, toggleTarget, target, newTask}) {
    return (
        <button
            className='content__delete-btn'
            style={categories.length === 0 ? { opacity: '0.3' } : {}}
            onClick={() => {
                const categoryNames = categories.map(el => {
                    return el.name
                })

                const categoryIndex = categoryNames.findIndex(i => i === target) - 1

                setNewTask(newTask.filter(item => {
                    return item.category !== target
                }))
                changeCategories(categories.filter(item => {
                    return item.name !== target
                }))
                if (categories.length >= 1) {
                    setTarget(categories[categoryIndex].name)
                    toggleTarget(categoryIndex)
                } else {
                    setTarget('')
                }
            }}>
            {categories.length === 0 ? <span>Нет категорий</span> : <span>Удалить категорию {target}</span>}
        </button>
    )
}

export default CategoryDeleteBtn