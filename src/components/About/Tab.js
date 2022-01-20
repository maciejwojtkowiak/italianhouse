import React from 'react'
import styles from './Tab.module.css'

const Tab = (props) => {
    
    return (
        <React.Fragment>
            <button onClick={props.activate} className={styles.tab}>
                {props.name}
            </button>
           
        </React.Fragment>
        
    )
}

export default Tab