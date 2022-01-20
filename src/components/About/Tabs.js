import styles from './Tabs.module.css'
import Tab from './Tab'
import { useState } from 'react'
import Content from './Content'

const Tabs = () => {
   


    const firstTabContent = (
    <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p> )

    const secondTabContent = (
    <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p> )

    const thirdTabContent = (
    <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p> )

    const [activeTab, setActiveTab] = useState(0)

    const tabActivationHandler = (num) => {
        setActiveTab(num)
    }

   

   const firstIsActive = activeTab === 0
   const secondIsActive = activeTab === 1
   const thirdIsActive = activeTab === 2
   const forthIsActive = activeTab === 3

   
    return (
        <div className={styles.tabs}>
            <Tab name='Recipe' activate={tabActivationHandler.bind(null, 1)} /> 
            <Tab name='Experience' activate={tabActivationHandler.bind(null, 2)} />
            <Tab name='Ingredients' activate={tabActivationHandler.bind(null, 3)} />
            <Content header="CLICK TAB TO KNOW MORE" content='' isActive={firstIsActive} />
            <Content header="Secret recipe" content= {firstTabContent} isActive={secondIsActive} />
            <Content header="Years of experience" content= {secondTabContent} isActive={thirdIsActive} />
            <Content header="The best ingredients" content= {thirdTabContent} isActive={forthIsActive} />
            
        </div>
    )
}

export default Tabs