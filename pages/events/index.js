// --- COMPONENTS ---
import { useState, useRef } from 'react'
import Image from 'next/image'
import { SearchIcon, MenuAlt1Icon, GlobeIcon, DuplicateIcon, StatusOnlineIcon, CalendarIcon, CreditCardIcon } from '@heroicons/react/outline'
import Navbar from '../../components/navbar/Navbar';

// --- STYLE ---
import style from './styles/index.module.scss'

// --- DATA BASE ---
import db from '../../data/db'
import Event from '../../components/events/Event';
import FilterItem from '../../components/filter/FilterItem';


function index() {

    const menuItem = useRef(null);
    const [showMenu, setShowMenu] = useState(false);
    const [showMenuItemContent, setShowMenuItemContent] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const hanfleShowMenu = function () {
        setShowMenu(s => !s);
    }
    const hanfleShowMenuItemCnotent = function () {
        setShowMenuItemContent(s => {
            if (s == true) {
                if (menuItem.current.children[1].classList.contains('current')) {
                    menuItem.current.children[1].classList.remove('current')
                    return !s;
                } else { 
                    menuItem.current.children[1].classList.add('current') 
                    return s;
                }
            } else {
                if (menuItem.current.children[1].classList.contains('current')) {
                    menuItem.current.children[1].classList.remove('current')
                    return !s;
                } else { 
                    menuItem.current.children[1].classList.add('current')
                    return s;
                }
            
            }
        })

    }
    const hanfleShowSearch = function () {
        setShowSearch(s => !s);
    }

    const eventsLenght = db.articles.length;
    const events = [];
    
    for (let i = 0; i < eventsLenght; i++) {
        events.push(<Event event={db.articles[i]} category={db.categories[i + 1]} />);
    }

    return (
        <div className={style.home}>
            <Navbar logo={db.projetName} />
            <div className={style.events__banner__img}>
                <Image layout='fill' alt={db.bannerEvents.bannerAtl} src={db.bannerEvents.bannerImg} objectFit='cover' objectPosition='center bottom' />
            </div>

            <div className={style.eventsHead}>
                <div className={style.titleLead}>
                    <MenuAlt1Icon className={style.menu__icon} />
                    <h2 className={style.tileOfSite}>{`mypass`}</h2>
                </div>
                <div className={style.events__search__box}>
                    <SearchIcon className={style.search__icon} />
                    <input type="text" name="q" id="" className={style.events__search} />
                </div>
            </div>

            

            <div className={style.events__contents}>
                <div className={style.events__session__left}>
                    <div className={style.left__nav__item} onClick={hanfleShowSearch}>
                        <SearchIcon className={style.left__search__icon} />
                        <small className={style.nav__item} current="search">recherche</small>
                    </div>
                    <div className={style.left__nav__item} onClick={hanfleShowMenuItemCnotent} ref={menuItem}>
                        <DuplicateIcon className={style.left__search__icon} />
                        <small className={style.nav__item} current="categorie">categories</small>
                    </div>
                    <div className={style.left__nav__item} onClick={hanfleShowMenuItemCnotent} ref={menuItem}>
                        <GlobeIcon className={style.left__search__icon} />
                        <small className={style.nav__item} current="country">pays</small>
                    </div>
                    <div className={style.left__nav__item} onClick={hanfleShowMenuItemCnotent} ref={menuItem}>
                        <StatusOnlineIcon className={style.left__search__icon} />
                        <small className={style.nav__item} current="status">status</small>
                    </div>
                    <div className={style.left__nav__item} onClick={hanfleShowMenuItemCnotent} ref={menuItem}>
                        <CalendarIcon className={style.left__search__icon} />
                        <small className={style.nav__item} current="date">dates</small>
                    </div>
                    <div className={style.left__nav__item} onClick={hanfleShowMenuItemCnotent} ref={menuItem}>
                        <CreditCardIcon className={style.left__search__icon} />
                        <small className={style.nav__item} current="price">prix</small>
                    </div>

                    {(showMenuItemContent)  && (
                        <div className={style.left__content__item}>
                            <FilterItem selectOption={db.filters.entries} title='pays' name='country' />
                        </div>
                    )}
                </div>
                <div className={style.events__session__right}>
                    {events}
                </div>
            </div>
        </div>
    )
}

export default index;


{/* <FilterItem selectOption={db.categories} title='categories' name='category' selected__msg='--- filter by category ---' />
            
            <FilterItem selectOption={db.filters.status} title='status' name='status' selected__msg='--- filter by status ---' />
            <FilterItem selectOption={db.filters.dates} title='dates' name='date' selected__msg='--- filter by date ---' />
            <FilterItem selectOption={db.filters.entries} title='prix' name='entry' selected__msg='--- filter by price ---' /> */}

