import React from 'react'
import styles from './Tab.module.css'

const Tab = (props) => {
    
    return (
            <div className={styles.tab}>
                <button onClick={props.activate} >
                    {props.name}
                </button>
            </div>
           

        
    )
}

export default Tab