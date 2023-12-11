import { useState } from 'react';
import styles from './App.module.scss';
import AnonxposeLogo from './assets/Anonxpose.png'


function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <img src={AnonxposeLogo} alt="" className={styles.logo} />
            <h2 className={styles.h1}>Blockchain Investigation Agency</h2>



        </div>
    );
}

export default App;
