
// --- COMPONENTS ---
import Link from 'next/link'
import Image from 'next/image'

// --- STYLE ---
import signStyle from '../styles/form/sign.module.scss'
import signinStyle from '../styles/form/signin.module.scss'


const signin = () => {
    return (
        <div className={`${signStyle.sign} ${signinStyle.signin}`}>
            <Image 
                layout='fill'
                alt={`image descriptive`}
                src='/signin_img.jpg'
                objectFit='cover'
                objectPosition='center center'
            />
            <div className={signStyle.content}>
                <h1 className={signStyle.logo}>{`mypass`}</h1>
                <h2 className={signStyle.title}>connecter-vous à mypass</h2>

                {/* RESEAU SOCIAUX */}
                <div className={signStyle.rsx__box}>
                    <div className={signStyle.rsx}></div>
                    <div className={signStyle.rsx}></div>
                    <div className={signStyle.rsx}></div>
                </div>
                <h3 className={signStyle.email}>Ou connectez-vous par email</h3>

                {/* FORM */}
                <form className={signStyle.form}>
                    <div className={signStyle.item}>
                        <div className={signStyle.label__box}>
                            <label htmlFor="email" className={signStyle.label}>email</label>
                        </div>
                        <div className={signStyle.input__box}>
                            <input type="text" name="email" id="email"  className={signStyle.input} />
                        </div>
                    </div>

                    <div className={signStyle.item}>
                        <div className={signStyle.label__box}>
                            <label htmlFor="password" className={signStyle.label}>mot de passe</label>
                            <Link href="#">
                                <a className={signinStyle.password__forget}>Mot de passe oublié ?</a>
                            </Link>
                        </div>
                        <div className={signStyle.input__box}>
                            <input type="password" name="password" id="password"  className={signStyle.input} />
                        </div>
                    </div>
                    
                    <div className={signStyle.item}>
                        <input type="submit" value="se connecter" className={`${signStyle.submit} ${signinStyle.submit}`} />
                    </div>

                </form>
            </div>
            <aside className={signStyle.aside}>
                <h2 className={signStyle.aside__heading}>{`Vous n'avez pas de compte ?`}</h2>
                <p className={signStyle.aside__invite}>créer un compte avec mypass et vivez une expérience nouvelle!</p>
                <Link href="#" >
                    <a className={signStyle.invite__signup}>s'inscrire</a>
                </Link>
            </aside>
        </div>
    )
}

export default signin;
