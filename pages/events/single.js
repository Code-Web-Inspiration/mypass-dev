
// --- COMPONENTS ---
// import { ArrowNarrowLeft, LocationMarkerIcon, PlusIcon, CheckIcon } from '@heroicons/react/outline'
import Event from '../../components/events/Event'
import Navbar from "../../components/navbar/Navbar"
import SinglePageHero from '../../components/events/SinglePageHero'
import SinglePageDetailsLeft from '../../components/events/SinglePageDetailsLeft'
import SinglePageDetailsRight from '../../components/events/SinglePageDetailsRight'


// --- STYLE ---
import singleStyle from './styles/single.module.scss'

// --- DATA BASE ---
import db from '../../data/db'

const single = () => {
    return (
        <div className={singleStyle.detail}>

            {/* navbar */}
            <Navbar logo="mypass" />

            {/* single hero */}
            <SinglePageHero />
        
            <div className={singleStyle.detail__contents}>
                <SinglePageDetailsLeft />
                <SinglePageDetailsRight />
            </div>
            <div className={singleStyle.other__events}>
                <h1 className={singleStyle.other__events__heading}>d'autres événements qui pourraient vous plaire</h1>
                <div className={singleStyle.other__events__contents}>
                    {db.articles.map(article => <Event event={article} key={article.thumb} />).slice(0, 6)}
                </div>
            </div>
        </div>
    )
}

export default single;

