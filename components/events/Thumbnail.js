// --- COMPONENTS ---
import Image from 'next/image'


// --- STYLE ---

const Thumbnail = ({ thumb }) => {
    
    return <Image 
        layout='responsive'
        src={thumb}
        width='1920'
        height='1080'
        alt={`event image`}
        objectFit='cover'
        objectPosition='center'
    />
}

export default Thumbnail;
