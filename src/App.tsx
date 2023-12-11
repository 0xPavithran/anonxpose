import { useState } from 'react';
import styles from './App.module.scss';
import AnonXposeLogo from './assets/Anonxpose.png';


function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <img src={AnonXposeLogo} alt="AnonXpose Logo" className={styles.logo} />
            <p id="img-display">Blockchain Investigation Agency</p>
            

            <h2>OPEN A CASE WITH AnonXpose</h2>

            <div></div>
            <button>CREATE CASE</button>
        </div>
    );
}

export default App;
