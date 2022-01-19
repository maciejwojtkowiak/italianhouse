import styles from './About.module.css'
import Tabs from './Tabs'

const About = () => {
    return (
        <div className={styles.about}>
            <h1 className={styles.header}>Our specialty</h1>
            <Tabs />
        </div>
    )
}

export default About