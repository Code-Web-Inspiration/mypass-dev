//--- COMPONENTS ---
import { useRouter } from 'next/router'
import Slider from "react-slick"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'


//--- STYLE ---
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import navStyle from './styles/nav.module.scss'
import carouselStyle from './styles/courousel.module.scss'



// const PrevBtn = (props) => {
//     const { className, style, onClick } = props;
//     return (<div 
//         className={className} 
//         style={{...style, background: 'red', width: '25px', height: '100%', zIndex: '10000', display: 'flex', justifyContent: 'center', alignItems: 'center', left: '0'}} 
//         onClick={onClick}>
//         <ChevronLeftIcon  className={carouselStyle.prevBtn} />)
//     </div>);
// }

// const NextBtn = (props) => {
//     const { className, style, onClick } = props;
//     return (<div 
//         className={className} 
//         style={{...style, background: 'red', width: '25px', height: '100%', zIndex: '10000', display: 'flex', justifyContent: 'center', alignItems: 'center', right: '0'}} 
//         onClick={onClick}>
//         <ChevronRightIcon className={carouselStyle.nextBtn} />
//     </div>);
// }


const Nav = (props) => {

    const router = useRouter();

    const categoryLists = (
        props.categories.map(category => (
        <div className={navStyle.item__box} key={category.toLowerCase().trim().replace(/\s/gi, '-')}>
            <h2
                className={navStyle.item} 
                onClick={(() => router.push(`/events/?category=${encodeURIComponent(category.toLowerCase().trim().replace(/\s/gi, '-'))}`))}
            >
            {category.toLowerCase().trim()}
            </h2>
        </div>
        ))
    );

    return (
        <div className={navStyle.nav}>
            {categoryLists}
        </div>
    )
}

export default Nav;
