import { IconSelector } from "../../../assets/icons/icons";

export default function CategoryAddBtn({style, isModalActive, setModalActive}){
    return(
        <button 
            className={`category-btn`}
            style={style}
            onClick={() => {
                setModalActive(!isModalActive)
            }}>
            <IconSelector className={`category-btn__ico`} id={'plus-square'}/>
            <h3>Добавить</h3>
        </button>
    )
}