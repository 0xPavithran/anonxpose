import { useState } from 'react';
import styles from './App.module.scss';
import AnonxposeLogo from './assets/Anonxpose.png'
import { Navbar } from './components/navbar/navbar';
import { InvestigatorPortal } from './components/investigator-portal/investigator-portal';
import { Routes, Route } from 'react-router-dom';
import { Contact } from './components/contact/contact';


function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Navbar />

            <div />
            <img src={AnonxposeLogo} alt="" className={styles.logo} />
            <h2 className={styles.h1}>Blockchain Investigation Agency</h2></div>
    );
}

export default App;
