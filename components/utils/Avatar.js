// COMPONENTS ---
import Image from 'next/image'

// STYLE ---
// import utilStyle from '../../styles/libs/utils.module.scss'

const Avatar = ({ author, onClick }) => {
  return <Image 
      layout='fill'
      src={author.profil} 
      alt={author.name}
      onClick={onClick}
      objectFit='cover'
    />
}

export default Avatar;