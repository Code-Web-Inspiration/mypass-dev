// COMPONENTS ---
import { StarIcon, ShareIcon, CalendarIcon, CashIcon } from '@heroicons/react/solid'
import Thumbnail from './Thumbnail'


// STYLE ---
import eventStyle from './styles/event.module.scss'


const  Event = (props) => {
    return (
        <article className={eventStyle.event}>
            <Thumbnail thumb={props.event.thumb} />
            <div className={eventStyle.footer}>
                <div className={eventStyle.f_head}>
                    <h3 className={eventStyle.f_category}>{props.category}</h3>
                    <p className={eventStyle.f_icon__box}><StarIcon className={eventStyle.star__icon} />{`${200}k`}</p><div style={{ width: '10px' }} />
                    <p className={eventStyle.f_icon__box}><ShareIcon className={eventStyle.share__icon} />Partager</p>
                </div>
                <div className={eventStyle.f_body}>
                    <div className={eventStyle.f_date__box}>
                        <span className={eventStyle.month}>Mai</span>
                        <span className={eventStyle.date}>14</span>
                    </div>
                    <div className={eventStyle.f_content__box}>
                        <h2 className={eventStyle.f_title}>{props.event.title.substr(0, 18) + '...'}</h2>
                        <p className={eventStyle.f_description}>{props.event.description.substr(0, 40)}</p>
                    </div>
                </div>
            </div>
            <div className={eventStyle.price__box}>
                <CashIcon className={eventStyle.cash__icon} />{props.event.price}
            </div>
        </article>
    )
}

export default Event;