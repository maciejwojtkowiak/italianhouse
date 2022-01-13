import React from 'react'
import styles from './Tab.module.css'

const Tab = (props) => {
    return (
        <React.Fragment>
            <div className={styles.tab}>
                {props.name}
            </div>
           
        </React.Fragment>
        
    )
}

export default Tab