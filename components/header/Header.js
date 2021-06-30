import Hero from "../hero/Hero"
import Nav from "../nav/Nav"
import Navbar from "../navbar/Navbar"



const Header = (props) => {
    return (
        <div style={{ width: '100%', margin: '0 auto', position: 'relative' }}>
            {/* NAVABR */}
            <Navbar logo={props.db.projetName} />

            {/* HERO */}
            <Hero />
        </div>
    )
}

export default Header;
