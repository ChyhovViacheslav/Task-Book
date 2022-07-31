import '../../../styles/global.scss'

export default function ProgressBar(){
    return(
        <div className='progress'>
            <div className='progress__body'>
                <div className='progress__title'>
                    <h1>Успехи за неделю</h1>
                    <div className='progress__dots'>точки</div>
                </div>
                <div className='progress__items'>
                    <div className='progress__item'>
                        <h4>Создано</h4>
                        <div className='progress__item-count'>
                            <span>113</span>
                            <p>задач</p>
                        </div>
                    </div>
                    <div className='progress__item'>
                        <h4>Завершено</h4>
                        <div className='progress__item-count'>
                            <span>93</span>
                            <p>задач</p>
                        </div>
                    </div>
                    <div className='progress__item'>
                        <h4>Удалено</h4>
                        <div className='progress__item-count'>
                            <span>14</span>
                            <p>задач</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}