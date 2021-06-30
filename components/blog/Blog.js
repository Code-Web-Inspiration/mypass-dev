
// --- COMPONENTS ---
import { HeartIcon, EyeIcon, UserCircleIcon, CalendarIcon } from '@heroicons/react/solid'
import Thumbnail from '../events/Thumbnail'
import Avatar from '../utils/Avatar'


// --- STYLE ---
import blogStyle from './styles/blog.module.scss'


const Blog = (props) => {
    return (
        <div className={blogStyle.blog}>
            <Thumbnail thumb={props.articles['thumb']}/>
            <div className={blogStyle.footer}>
                <div className={blogStyle.f_head}>
                    <h3 className={blogStyle.f_title}>{props.articles['title'].substr(0, 20)}</h3>
                    <p className={blogStyle.f_icon__box}><HeartIcon className={blogStyle.heart__icon} />{`26k`}</p><div style={{ width: '10px' }} />
                    <p className={blogStyle.f_icon__box}><EyeIcon className={blogStyle.eye__icon} />{`26k`}</p>
                </div>
                <div className={blogStyle.f_footer}>
                    <p className={blogStyle.f_author}>
                        {props.articles['author'] ? 
                        <Avatar author={props.articles['author']} /> : 
                        <UserCircleIcon className={blogStyle.user__icon} />}
                    </p>{props.articles['author'].name}
                    <p className={blogStyle.f_date}>{`le Mar, 02 Juin, 2021`}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Blog;
