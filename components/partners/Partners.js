// COMPONENTS
import Image from 'next/image'

// STYLE ---
import partnersStyle from './styles/partners.module.scss'

const Partners = (props) => {
    return (
        <div className={partnersStyle.partners}>
            <div className={partnersStyle.partners__contents}>
                <div className={partnersStyle.partnersHead}>
                    <h2 className={partnersStyle.heading}>Nos Partenaires</h2 >
                    <p className={partnersStyle.baseline}>Ils parlent de nous et nous font confiance.</p>
                </div>
                <div className={partnersStyle.content}>
                    <Image layout='responsive' alt={props.partners.bannerAtl} src={props.partners.banner} width={2000} height={1080} objectFit='contain' />
                    {/* <div className={partnersStyle.partner}>
                        <Image layout='responsive' alt={`partner icon`} src='/event.jpg' width={200} height={100} objectFit='contain' />
                    </div>
                    <div className={partnersStyle.partner}>
                        <Image layout='responsive' alt={`partner icon`} src='/event.jpg' width={200} height={100} objectFit='contain' />
                    </div>
                    <div className={partnersStyle.partner}>
                        <Image layout='responsive' alt={`partner icon`} src='/event.jpg' width={200} height={100} objectFit='contain' />
                    </div>
                    <div className={partnersStyle.partner}>
                        <Image layout='responsive' alt={`partner icon`} src='/event.jpg' width={200} height={100} objectFit='contain' />
                    </div>
                    <div className={partnersStyle.partner}>
                        <Image layout='responsive' alt={`partner icon`} src='/event.jpg' width={200} height={100} objectFit='contain' />
                    </div>
                    <div className={partnersStyle.partner}>
                        <Image layout='responsive' alt={`partner icon`} src='/event.jpg' width={200} height={100} objectFit='contain' />
                    </div>
                    <div className={partnersStyle.partner}>
                        <Image layout='responsive' alt={`partner icon`} src='/event.jpg' width={200} height={100} objectFit='contain' />
                    </div>
                    <div className={partnersStyle.partner}>
                        <Image layout='responsive' alt={`partner icon`} src='/event.jpg' width={200} height={100} objectFit='contain' />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Partners;
