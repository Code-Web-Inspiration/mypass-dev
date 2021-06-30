//--- COMPONENTS ---
import Image from 'next/image'
import {Button} from '../utils/Button'


// --- STYLE ---
import heroStyle from './styles/hero.module.scss'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const Hero = (props) => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const imgSlides = [
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1928131/pexels-photo-1928131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3473085/pexels-photo-3473085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3216865/pexels-photo-3216865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ];

    return (
        <div className={heroStyle.hero}>
            <div className={heroStyle.imgSlide__box}>
                <AutoplaySlider play={true} cancelOnInteraction={false} interval={5000} className={heroStyle.awesomeSlider}>
                    {
                        imgSlides.map( image => (<div style={{backgroundColor: 'black', height: '100%', width: '100%', position: 'relative'}} key={image} >
                            <Image layout='fill' src={image} objectFit='cover' objectPosition='center bottom' />
                        </div>))
                    }
                </AutoplaySlider>
            </div>
            {/* <div className={heroStyle.content}>
                <h1 className={heroStyle.title__lead}>
                    Découvrez, partagez et vivez des expériences uniques près de chez vous.
                </h1>
                <h2 className={heroStyle.title__sub}>Lorem ipsum dolor sit amet, consectetur</h2>
                <footer className={heroStyle.footer}>
                    <Button 
                        className={heroStyle.button}
                        label="créer un évènement" />
                </footer>
            </div> */}
        </div>
    )
}

export default Hero;
