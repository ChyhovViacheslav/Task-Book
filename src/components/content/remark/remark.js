export default function Remark(){
    return(
        <div className="remark">
            <div className="remark__body">
                <div className="remark__title">
                    <h1>Наблюдение</h1>
                </div>
                <div className="remark__content">
                    <div className="remark__create">
                        <p>Больше всего задач вы создаете в <span>Понедельник</span></p>
                    </div>
                    <div className="remark__complited">
                        <p>Больше всего задач вы завершаете во <span>Вторник</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}