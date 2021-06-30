


// --- STYLE ---
import filterOptionStyle from './styles/filteroption.module.scss'

const FilterOption = (props) => {
    return (
        <div className={filterOptionStyle.filter__option}>
            <input 
                type="radio" 
                name={props.name} 
                id={props.label}
                checked={props.checked}
                onChange={props.onChange}
                onClick={props.onClick} 
                className={filterOptionStyle.radio} 
            />
            <label htmlFor={props.label}>{props.label}</label>
        </div>
    )
}

export default FilterOption;
