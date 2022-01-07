import styles from './Hero.module.css'
import Header from '../Navbar/Header'
import pizza from '../../images/Naples.png'

const Hero = () => {
    
    
    return (    
        <div className={styles.heroContainer}>
             <Header />
        <img className={styles.heroImage} src={pizza} />
        </div>
    )
}

export default Hero