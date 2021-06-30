
// --- COMPONENTS ----
import { useState } from 'react'
import FilterOption from './FilterOption'


// --- STYLE ---
import filterItemStyle from './styles/filteritem.module.scss'

const FilterItem = (props) => {
    const [selectedItem, setSelectedItem] = useState(props.selected__msg);

    const handleShowSelect = () => {
        setShowSelect(s => !s);
    };

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <div className={filterItemStyle.filter__item}>
            <h2 className={filterItemStyle.title}>{props.title}</h2>
            <div className={filterItemStyle.select__box}>
                {(<div className={filterItemStyle.select__options}>
                    {props.selectOption.map(option => <FilterOption 
                        label={option} 
                        name={props.name} 
                        key={option.replace(/ /gi, '-')}
                        onChange={handleChange}
                        onClick={() => setSelectedItem(option)}
                     />)

                    }
                    </div>)
                }
                <div className={filterItemStyle.selected} onClick={handleShowSelect}>
                    <p className={filterItemStyle.selected__msg}>{selectedItem}</p>
                </div>
            </div>
        </div>
    )
}

export default FilterItem;
