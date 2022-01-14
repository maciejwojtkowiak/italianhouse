import styles from './Content.module.css'

const Content = (props) => {

    return (
        <div className={styles.tabContent}>
            <h1>{props.header}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default Content