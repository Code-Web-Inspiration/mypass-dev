// --- COMPONENTS ---
import { CalendarIcon, HomeIcon, PencilIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
import NavbarItem from './NavbarItem'

//--- STYLE ---
import navbarStyle from './style/navbar.module.scss'

const Navbar = (props) => {
    return (
        <div className={navbarStyle.navbar}>
            <div className={navbarStyle.navbarContent}>
                <NavbarItem title={`ACCUEIL`.toLocaleLowerCase()} Icon={HomeIcon} />
                <NavbarItem title={`EVEVEMENTS`.toLocaleLowerCase()} Icon={CalendarIcon} />
                <NavbarItem title={`CREER UN EVENEMENT`.toLocaleLowerCase()} Icon={PencilIcon} />
                <NavbarItem title={`RECHERCHER UN EVENEMENT`.toLocaleLowerCase()} Icon={SearchIcon} />
                <NavbarItem title={`JONAS FAMPO`.toLocaleLowerCase()} Icon={UserIcon} />
            </div>
            
            <div className={navbarStyle.navbarLogo}>
                <h2 className={navbarStyle.logo}>{props.logo}</h2>
            </div>
        </div>
    )
}

export default Navbar;
