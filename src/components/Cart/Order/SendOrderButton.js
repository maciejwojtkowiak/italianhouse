import styles from './SendOrderButton.module.css'
const SendOrderButton = (props) => {
   
    return (
         
            <button className={styles.button} type='submit' disabled={!props.isValid} >Send Order</button>
        
    )
}

export default SendOrderButton