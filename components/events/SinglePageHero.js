// --- COMPONENTS ---
import Image from 'next/image'
import { ArrowNarrowLeftIcon, LocationMarkerIcon, PlusIcon, CheckIcon } from '@heroicons/react/outline'
import {Button} from '../../components/utils/Button'

// --- STYLE ---
import singlePageHeroStyle from './styles/singlepagehero.module.scss'


const SinglePageHero = () => {
    return (
        <header className={singlePageHeroStyle.header}>
            <div className={singlePageHeroStyle.event__img}>
                <Image 
                    layout='fill'
                    src='/event.jpg'
                    alt={`event image`}
                    objectFit='cover'
                    objectPosition='center bottom'
                />
            </div>
            <div className={singlePageHeroStyle.header__content}>
                <h1 className={singlePageHeroStyle.header__title}>Lorem ipsum dolor sit amet consectetur</h1>
                <h4 className={singlePageHeroStyle.header__author}>By {'Jonas Sant-anna'}</h4>
                <p className={singlePageHeroStyle.header__adress}>Lorem ipsum dolor, sit amet consectetur adipisicing, Abidjan 2000, Lorem ipsum dolor sit amet consectetur</p>
                <p className={singlePageHeroStyle.header__location}>
                    <LocationMarkerIcon className={singlePageHeroStyle.location__marker__icon} />
                    <span>voir carte</span>
                </p>
            </div>
            <aside className={singlePageHeroStyle.aside}>
                <div className={singlePageHeroStyle.aside__description}>
                    <h3 className={singlePageHeroStyle.aside__heading}>date & heure</h3>
                    <h4 className={singlePageHeroStyle.aside__date__event}>Mardi, Mai 11, 2021 à 10:40 PM</h4>
                    <button className={singlePageHeroStyle.aside__addTo}>
                        <PlusIcon className={singlePageHeroStyle.Plus__icon} /> <span>Ajouter à mes évènements</span>
                    </button>
                    <div className={singlePageHeroStyle.separator} />
                    <Button className={singlePageHeroStyle.book__now} label={`reservez maintenant`} />
                </div>
            </aside>

            <footer className={singlePageHeroStyle.footer}>
                <span className={singlePageHeroStyle.stock__ticket}>
                    Ticket : {` Disponible `} <div className={singlePageHeroStyle.spanding} /> {` 2000 `}{` CFA `}
                </span>
            </footer>

            <h4 className={singlePageHeroStyle.arrow__back}>
                <ArrowNarrowLeftIcon className={singlePageHeroStyle.arrow__icon} />
            </h4>
        </header>
    )
}

export default SinglePageHero;
