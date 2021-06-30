

//--- STYLE ---
import navbar_itemStyle from './style/navbar_item.module.scss'


const NavbarItem = (props) => {
    return (
        <div className={navbar_itemStyle.navbarItem}>
            <props.Icon 
                style={{ height: '39px', with: '39px', marginBottom: '.4rem' }} 
                className={navbar_itemStyle.navbarItem__icon} 
            />
            <p className={navbar_itemStyle.navbarItem__title}>{props.title}</p>
        </div>
    )
}

export default NavbarItem;

