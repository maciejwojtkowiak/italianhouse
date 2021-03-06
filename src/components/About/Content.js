import React from 'react'
import styles from './Content.module.css'
import { CSSTransition } from 'react-transition-group'
import './Content.css'

const Content = (props) => {
    const isActive = (props.isActive)
    return (
        <React.Fragment>
            <CSSTransition mountOnEnter in={isActive} timeout={1000} classNames='content'>
            
                <div className={styles.tabContent}>
                    <h1>{props.header}</h1>
                    {props.content}
                </div>
            </CSSTransition>
           
        </React.Fragment>
        
        
    )
}

export default Content