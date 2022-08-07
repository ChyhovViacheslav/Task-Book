import '../../../styles/global.scss'

export default function TaskList({newTask, target, setNewTask, decTask, deletedTask, complitedTaskN, countTask}){

    const activeTask = newTask.map((item) => {
        const {category, task, complited, id} = item
        if(target === category && !complited){
            return(
                <div key={id} className='task__active-item'>
                    <input 
                        className='task__input' 
                        type="checkbox"
                        checked={false}
                        onChange={() => {
                            const changedTask = newTask.map((item) => {
                                return item.id === id ? {...item, complited: !complited} : item
                            })
                            countTask(++complitedTaskN)
                            setNewTask(changedTask)
                        }}/>
                    <span>{task}</span>
                    <button className='task__trash' onClick={() => {
                        const changedTask = newTask.filter((item) => {
                            return item.id !== id
                        })
                        setNewTask(changedTask)
                        decTask(++deletedTask)
                    }}>
                    </button>
                </div>
            )
        }
    })

    const complitedTask = newTask.map((item) => {
        const {category, task, complited, id} = item
        if(target === category && complited){
            return(
                <div key={id} className='task__active-item'>
                    <input 
                        className='task__input' 
                        type="checkbox"
                        checked={true}
                        onChange={() => {
                            const changedTask = newTask.map((item) => {
                                return item.id === id ? {...item, complited: !complited} : item
                            })
                            countTask(--complitedTaskN)
                            setNewTask(changedTask)
                        }}/>
                    <span style={{textDecoration: 'line-through'}}>{task}</span>
                    <button className='task__trash' onClick={() => {
                        const changedTask = newTask.filter((item) => {
                            return item.id !== id
                        })
                        setNewTask(changedTask)
                        decTask(++deletedTask)
                    }}>
                    </button>
                </div>
            )
        }
    })

    return(
        <div className='task'>
            <div className='task__body'>
                <div className='task__title'>
                    <h1>Активные задачи</h1>
                    <div className='task__dots'>
                        точки
                    </div>
                </div>
                <div className='task__active'>
                    {/* {activeTask.length > 1 ? activeTask : 
                    <div className='task__active-empty'>
                        <span>Вы пока не создали каких-либо задач в данной категории</span>
                    </div>} */}
                    {activeTask}
                </div>
                <div className='task__complited-title'>
                    <h1>Завершенные задачи</h1>
                </div>
                <div className='task__completed'>
                    {complitedTask}
                </div>
            </div>
        </div>
    )
}