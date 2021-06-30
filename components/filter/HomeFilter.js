
// --- COMPONENTS ---


// --- STYLE ---
import home_filterStyle from './styles/home_filter.module.scss'

const HomeFilter = (props) => {

    return (
        <div className={home_filterStyle.homeFilter}>
            <select name="category" id="category" className={home_filterStyle.select}>
                <option className={home_filterStyle.option} selected>{`De quel type d'évènement s'agit-il ?`}</option>
                <option className={home_filterStyle.option} >{` `}</option>
                {props.categories.map(category => {
                    return <option className={home_filterStyle.option} >{category.trim()}</option>
                })}
            </select>
            <select name="country" id="country" className={home_filterStyle.select}>
                <option className={home_filterStyle.option} selected>{`Dans quel pays ce déroule l'évènement ?`}</option>
                <option className={home_filterStyle.option} >{` `}</option>
                {props.filters.countries.map(country => {
                    return <option className={home_filterStyle.option} >{country.trim()}</option>
                })}
            </select>
            <select name="dates" id="dates" className={home_filterStyle.select}>
                <option className={home_filterStyle.option} selected>{`A quelle date ce déroule l'évènement`}</option>
                <option className={home_filterStyle.option} >{` `}</option>
                {props.filters.dates.map(date => {
                    return <option className={home_filterStyle.option} >{date.trim()}</option>
                })}
            </select>
            <select name="status" id="status" className={home_filterStyle.select}>
                <option className={home_filterStyle.option} selected>{`Quel genre d'évènement récherchez-vous ?`}</option>
                <option className={home_filterStyle.option} >{` `}</option>
                {props.filters.entries.map(value => {
                    return <option className={home_filterStyle.option} >{value.trim()}</option>
                })}
            </select>
        </div>
    )
}

export default HomeFilter
