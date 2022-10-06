//React 
import { useState } from 'react';
//Styling
import styles from './App.module.css';
//Components
import Home from './Home';
import { Login, Logout } from './authentication';


function App() {
    const [sessionUser, setSessionUser] = useState(null);
    const [feature, setFeature] = useState('read');

    const loginUser = (userArr) => {
        setSessionUser(userArr);
        return
    };

    const logoutUser = () => {
        setSessionUser(null);
        return
    }

    const switchFeature = (e, value) => {
        e.preventDefault();
        if(e.target.value) {
          return setFeature(e.target.value);
        }
        return setFeature(value);
      }

    return (
        <div className={styles.app}>
            {sessionUser ? 
            <div className={styles.loggedIn}>
                <h1 className={styles.header}>
                    Firebase tutorial:
                </h1>
                <div className={styles.buttonBox}>
                    <button 
                        type="button" 
                        value="read"  
                        onClick={switchFeature}    
                    >
                        View messages
                    </button>
                    <button 
                        type="button" 
                        value="create"  
                        onClick={switchFeature}
                    >
                        Create new message
                    </button>
                    <Logout logoutUser={logoutUser}/>
                </div>
            </div>
            :
            <div className={styles.loggedOut}>
                <h1 className={styles.header}>
                    Firebase tutorial:
                </h1>
                <Login loginUser={loginUser}/>
            </div>
            }
            {sessionUser && <Home sessionUser={sessionUser} feature={feature}/>}
        </div>
    );
}
export default App;
