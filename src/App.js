//React 
import { useState } from 'react';
//Styling
import styles from './App.module.css';
//Components
import Create from './Create';
import Read from './Read';

function App() {
  const [feature, setFeature] = useState('read');

  const switchFeature = (e) => {
    e.preventDefault();
    return setFeature(e.target.value);
  }

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <h1 className={styles.header}>
          Firebase/Firestore tutorial:
        </h1>
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
      </div>
      {feature === 'create' && <Create/>}
      {feature === 'read' && <Read/>}
    </div>
  );
}

export default App;
