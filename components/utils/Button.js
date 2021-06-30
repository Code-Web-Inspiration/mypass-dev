
import buttonStyle from '../../styles/libs/button.module.scss'

export const Button = ({ label, children, className }) =>  {
    return <button className={`${buttonStyle.button} ${className}`}>
        {children}{' '}{label}
    </button>
}