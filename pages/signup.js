
// COMPONENTS ---
import Link from 'next/link'
import Image from 'next/image'

// STYLE ---
import signStyle from '../styles/form/sign.module.scss'
import signupStyle from '../styles/form/signup.module.scss'




function Signup() {
    return (
        <div className={`${signStyle.sign} ${signupStyle.signup}`}>
            <Image 
                layout='fill'
                alt={`image descriptive`}
                src='/signup_img.jpg'
                objectFit='cover'
                objectPosition='center center'
            />
            <aside className={signStyle.aside}>
                <h2 className={signStyle.aside__heading}>{`Vous avez déjà un compte ?`}</h2>
                <p className={signStyle.aside__invite}>Restez connecté avec mypass et ne manquez aucun de vos évènements préféré !</p>
                <Link href="#" >
                    <a className={signStyle.invite__signup}>se connecter</a>
                </Link>
            </aside>
            <div className={signStyle.content}>
                <h1 className={signStyle.logo}>{`mypass`}</h1>
                <h2 className={signStyle.title}>créer un compte</h2>

                {/* RESEAU SOCIAUX */}
                <div className={signStyle.rsx__box}>
                    <div className={signStyle.rsx}></div>
                    <div className={signStyle.rsx}></div>
                    <div className={signStyle.rsx}></div>
                </div>
                <h3 className={signStyle.email}>Ou utilisez votre email pour vous inscrire</h3>

                {/* FORM */}
                <form className={signStyle.form}>
                    <div className={signStyle.item}>
                        <div className={signStyle.label__box}>
                            <label htmlFor="fullname" className={signStyle.label}>nom et prénom</label>
                        </div>
                        <div className={signStyle.input__box}>
                            <input type="text" name="fullname" id="fullname"  className={signStyle.input} />
                        </div>
                    </div>
                    <div className={signStyle.item}>
                        <div className={signStyle.label__box}>
                            <label htmlFor="phone" className={signStyle.label}>numéro de téléphone</label>
                        </div>
                        <div className={signStyle.input__box}>
                            <input type="phone" name="phone" id="phone"  className={signStyle.input} />
                        </div>
                    </div>
                    <div className={signStyle.item}>
                        <div className={signStyle.label__box}>
                            <label htmlFor="email" className={signStyle.label}>adresse e-mail</label>
                        </div>
                        <div className={signStyle.input__box}>
                            <input type="text" name="email" id="email"  className={signStyle.input} />
                        </div>
                    </div>

                    <div className={signStyle.item}>
                        <div className={signStyle.label__box}>
                            <label htmlFor="password" className={signStyle.label}>mot de passe</label>
                        </div>
                        <div className={signStyle.input__box}>
                            <input type="password" name="password" id="password"  className={signStyle.input} />
                        </div>
                    </div>
                    <div className={signStyle.item}>
                        <div className={signStyle.label__box}>
                            <label htmlFor="rpassword" className={signStyle.label}>confirmer le mot de passe</label>
                        </div>
                        <div className={signStyle.input__box}>
                            <input type="rpassword" name="rpassword" id="rpassword"  className={signStyle.input} />
                        </div>
                    </div>
                    <div className={signStyle.item}>
                        <p className={signupStyle.cgu}>
                            En vous inscrivant, vous acceptez nos <span>Conditions générales</span>, notre <span>Politique d’utilisation des données</span> et notre <span>Politique d’utilisation des cookies</span>.
                        </p>
                    </div>

                    <div className={signStyle.item}>
                        <input type="submit" value="S'inscrire" className={`${signStyle.submit} ${signupStyle.submit}`} />
                    </div>

                </form>

                {/* <div className={signStyle.sign__link}><Link href='#'><a className={signStyle.a}>se connecter</a></Link></div> */}
            </div>

        </div>
    )
}

export default Signup;
