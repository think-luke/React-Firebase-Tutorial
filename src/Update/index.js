//React imports
import { useState } from 'react';
//Styling
import styles from './Update.module.css';

//Firestore
import { firestore } from "../firebase";
import { doc, updateDoc } from "@firebase/firestore";

export default function Update({ event }) {
    //Updated input state variable
    const [newText, setNewText] = useState("");

    //Define a Firestore reference varibale here.
    //This following line is how you access your single document.
    const eventRef = doc(firestore, 'demo_collection', `${event.id}`)

    //Handle onChange for form input
    const handleText = (e) => {
        e.preventDefault();
        setNewText(e.target.value);
        return
    };

    const handleUpdate = async(e) => {
        e.preventDefault();
        await updateDoc(eventRef, {
            text: newText
        });
        return console.log("You successfully edited a field in your Firestore document.")
    }

    return (
        <div className={styles.modal}>
            <form 
                className={styles.form}
                onSubmit={handleUpdate}
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
                <button 
                    type="submit" 
                    className={styles.button}
                >
                    Submit
                </button>
            </form>
        </div>
    )
};