// --- COMPONENTS ----
import Image from 'next/image'

// --- STYLE ---
import singlePageDetailsStyle from './styles/singlepagedetailleft.module.scss'

const SinglePageDetailsLeft = () => {
    return (
        <section className={singlePageDetailsStyle.description__left__section}>
            <div className={singlePageDetailsStyle.description__left__card}>
                <h2 className={singlePageDetailsStyle.description_event__heading}>Informations l'évènement</h2>
                <p className={singlePageDetailsStyle.description__event__desc__text}>
                    Nulla blandit, nunc eu condimentum sagittis, leo arcu iaculis eros, 
                    in rhoncus mauris tellus sit amet sem. Maecenas porttitor semper rhoncus. 
                    Etiam dictum hendrerit augue at elementum. Vestibulum ante ipsum primis in 
                    faucibus orci luctus et ultrices posuere cubilia curae; Curabitur nec nisl 
                    id libero bibendum posuere in nec felis. Suspendisse blandit sodales eros, 
                    ut blandit ligula blandit et. Quisque pellentesque justo lectus, sed dignissim 
                    libero commodo nec. Donec erat urna, egestas id sem eget, accumsan luctus erat. 
                    Aenean quis pretium nulla. Duis dignissim vestibulum sem, eu posuere urna cursus et. 
                    Cras finibus, ipsum sit amet placerat pharetra, nulla ligula ornare magna, <br />
                    vel suscipit enim lacus eget orci. Donec malesuada, augue at tempor vestibulum, 
                    libero lorem pellentesque lectus, vitae sollicitudin dui magna sit amet ex. 
                    Vestibulum tincidunt, tellus at lacinia tincidunt, eros erat tempor enim.
                </p>
            </div>
            <div className={singlePageDetailsStyle.description__left__card}>
                <h2 className={singlePageDetailsStyle.description_event__heading}>les heures</h2>
                <div className={singlePageDetailsStyle.description__event__hours__box}>
                    <span className={singlePageDetailsStyle.description__event__hours}>Heure de la semaine: 7h - 12h</span>
                    <span className={singlePageDetailsStyle.description__event__hours}>Heure du week-end: 13h - 17h</span>
                </div>
            </div>
            <div className={singlePageDetailsStyle.description__left__card}></div>
        </section>
    )
}

export default SinglePageDetailsLeft;
