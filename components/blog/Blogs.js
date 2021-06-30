
// --- STYLE ---
import Blog from './Blog'
import blogStyle from './styles/blogs.module.scss'

const Blogs = (props) => {
    return (
        <div className={blogStyle.blogs}>
            <div className={blogStyle.blogs__contents}>
                <div className={blogStyle.blogsHead}>
                    <h2 className={blogStyle.heading}>{`Blog`}</h2>
                </div>
                <p className={blogStyle.msg}>{`New, Business, Art, ... Restez connecté sur blog de mypass et ne manquez rien de vos évènements préférés.`}</p>
                <div className={blogStyle.blogsBody}>
                    <Blog articles={props.articles[0]} />
                    <Blog articles={props.articles[1]} />
                    <Blog articles={props.articles[2]} />
                </div>
            </div>
        </div>
    )
}

export default Blogs;
