import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [text, setText] = useState("");

  const handleText = (e) => {
    e.preventDefault();
    setText(e.target.value);
    return
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Firebase tutorial form:</h1>
      <form 
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <label 
          htmlFor="example"
          className={styles.label}
        />
        <input 
          type="text" 
          name="example"
          className={styles.input}
          onChange={handleText}
          required 
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
