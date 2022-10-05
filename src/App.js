//React 
import { useState } from 'react';
//Styling
import styles from './App.module.css';
//Components
import Create from './Create';
import Read from './Read';

function App() {
  const [feature, setFeature] = useState('create');

  const switchFeature = (featureName) => {
    return setFeature(featureName);
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Firebase/Firestore tutorial:</h1>
      {feature === 'create' && <Create switchFeature={switchFeature}/>}
      {feature === 'read' && <Read switchFeature={switchFeature}/>}
      {feature === 'update' && <Update switchFeature={switchFeature}/>}
      {feature === 'destroy' && <Destroy switchFeature={switchFeature}/>}
    </div>
  );
}

export default App;
