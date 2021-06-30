// --- COMPONENTS ---
import Image from 'next/image'


// --- STYLE ---
import singlePageDetailsStyle from './styles/singlepagedetailright.module.scss'

const SinglePageDetailsRight = () => {
    return (
        <section className={singlePageDetailsStyle.description__right__section}>
            <div className={singlePageDetailsStyle.description__right__card}>
                <h2 className={singlePageDetailsStyle.description_event__heading}>lieu de l'événement</h2>
                <div className={singlePageDetailsStyle.description__event__map}></div>
                <h3 className={singlePageDetailsStyle.description__event__name}>Lorem ipsum dolor sit amet consectetur</h3>
                <p className={singlePageDetailsStyle.description__event__adress}>Lorem ipsum dolor, sit amet consectetur adipisicing, Abidjan 2000, Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className={singlePageDetailsStyle.description__right__card}>
                <h2 className={singlePageDetailsStyle.description_event__heading}>Tags</h2>
                <div className={singlePageDetailsStyle.description__event__tags__content}>
                    <button className={singlePageDetailsStyle.event__tag}>tag un</button>
                    <button className={singlePageDetailsStyle.event__tag}>tag deux</button>
                    <button className={singlePageDetailsStyle.event__tag}>tag trois</button>
                    <button className={singlePageDetailsStyle.event__tag}>tag quatre</button>
                    <button className={singlePageDetailsStyle.event__tag}>tag cinq</button>
                </div>
            </div>
            <div className={singlePageDetailsStyle.description__right__card}>
                <h2 className={singlePageDetailsStyle.description_event__heading}>Partager avec vos amis</h2>
                <div className={singlePageDetailsStyle.description__event__share__box}>
                    <p className={singlePageDetailsStyle.event__share} >
                        <img src='/event.jpg' alt='' />
                    </p>
                    <p className={singlePageDetailsStyle.event__share} >
                        <img src='/event.jpg' alt='' />
                    </p>
                    <p className={singlePageDetailsStyle.event__share} >
                        <img src='/event.jpg' alt='' />
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SinglePageDetailsRight;
