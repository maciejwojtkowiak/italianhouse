import styles from './Tabs.module.css'
import Tab from './Tab'
import { useState, useEffect } from 'react'
import Content from './Content'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0)

    const firstTabContent = (
    <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
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
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p> )

    

    const tabActivationHandler = (num) => {
        setActiveTab(num)
    }

   

   const firstIsActive = activeTab === 0
   const secondIsActive = activeTab === 1
   const thirdIsActive = activeTab === 2

   useEffect(() => {

       setInterval(() => {
            setActiveTab((prevTab) => {
                if (prevTab === 3) return 0
                return prevTab++
            })
       }, 20000)
   
   }, [])
   

   
    return (
        <div className={styles.tabs}>
            
            <Tab name='Recipe' activate={tabActivationHandler.bind(null, 1)} /> 
            <Tab name='Experience' activate={tabActivationHandler.bind(null, 2)} />
            <Tab name='Ingredients' activate={tabActivationHandler.bind(null, 3)} />
            <Content header="Secret recipe" content= {firstTabContent} isActive={firstIsActive} />
            <Content header="Years of experience" content= {secondTabContent} isActive={secondIsActive} />
            <Content header="The best ingredients" content= {thirdTabContent} isActive={thirdIsActive} />
            
        </div>
    )
}

export default Tabs