import styles from './Hero.module.css'
import Header from '../Navbar/Header'
import pizza from '../../images/Naples.png'
const Hero = (props) => {
    
    
    const smoothScrollHandlerMeals = () => {
        props.scrollToMeals.current.scrollIntoView({behavior: 'smooth', block:'center'})
    }

    const smoothScrollHandlerAbout = () => {
        props.scrollToAbout.current.scrollIntoView({behavior: 'smooth', block: 'center'})
    }


    return (    
        <div className={styles.heroContainer}>
            <Header scrollToMeals={smoothScrollHandlerMeals} scrollToAbout={smoothScrollHandlerAbout} />
            <div className={styles.description}>
                <div className={styles.description__leftside}>
                <h3 className={styles.description__header}>REAL ITALIAN PIZZA</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aliquam nisi sapien, laoreet et tellus sed, dictum dignissim 
                    lectus. Nulla a nulla tortor. Aliquam et risus nec ante pulvinar 
                    bibendum. Nam eget tellus diam. Phasellus mauris lectus, blandit 
                    at blandit tempor, lacinia at tellus. Maecenas rutrum aliquet 
                    eros quis faucibus. Fusce eu nibh in massa pharetra sollicitudin 
                    ac ornare lacus. Nulla condimentum ac nulla at aliquet. Integer 
                    quis tincidunt lorem. Nulla rutrum ullamcorper lobortis.</p>

                <button className={styles.orderButton} onClick={smoothScrollHandlerMeals}>Order now</button>
            </div>
                <div className={styles.description__rightside}>
                    <img alt="pizza img" className={styles.heroImage} src={pizza} />
                </div>
                
            </div>
        </div>
    )
}

export default Hero
