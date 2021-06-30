
// --- COMPONENTS ---
import { useState, useEffect } from 'react'
import { AdjustmentsIcon } from '@heroicons/react/outline'
import Nav from '../nav/Nav'
import HomeFilter from '../filter/HomeFilter'
import Event from '../events/Event'
import {Button} from '../utils/Button'



// --- STYLE ---
import resultsStyle from './styles/results.module.scss'

const Results = (props) => {
    const [filter, setfilter] = useState(false);

    const handleFilter = () => {
        setfilter(f => !f);
    };

    return (
        <div className={resultsStyle.results}>
            <div className={resultsStyle.results__contents}>
                {/* NAVFILTER */}
                <Nav categories={props.db.categories} />
                <div className={resultsStyle.resultsHead}>
                    <h2 className={resultsStyle.heading}>{props.label}</h2>
                    <div className={resultsStyle.filter__box}>
                        <button onClick={handleFilter}><AdjustmentsIcon className={resultsStyle.adjustments__icon} /> <h3>Filtrer</h3></button>
                        {filter && <HomeFilter filters={props.db.filters} categories={props.db.categories} />}
                    </div>
                </div>
                <div className={resultsStyle.resultsBody}>
                    {props.db.articles.map(article => <Event event={article} key={article.thumb} />)}
                </div>
                <div className={resultsStyle.all__events__link__box}>
                    <Button className={resultsStyle.button} label={`tout voir`} />
                </div>
            </div>
        </div>
    )
}

export default Results;
