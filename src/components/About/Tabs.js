import styles from './Tabs.module.css'
import Tab from './Tab'
import { useState } from 'react'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1)

   
    return (
        <div className={styles.tabs}>
            {activeTab === 1 && <Tab name='first' /> }
            <Tab />
            <Tab />

            
        </div>
    )
}

export default Tabs