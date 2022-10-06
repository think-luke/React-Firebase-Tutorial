//React imports
import { useState } from 'react';
//Styling
import styles from './Create.module.css';

//Firestore
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

export default function Create({ dataUpdated, switchFeature }) {
    //Form input state variable
    const [text, setText] = useState("");

    //Define a Firestore reference varibale here.
    //This following line is how you name your collection:
    const ref = collection(firestore, "demo_collection");

    //Handle onChange for form input
    const handleText = (e) => {
        e.preventDefault();
        setText(e.target.value);
        return
    };

    //Handling form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        /*Define the object you want to send to Firestore here
        This one is very simple, but you could do something like:

        let trainingData = {
            eventType,
            description,
            url,
            purchasedOn,
            completedOn,
            cost
        }

        */

        let testData = {
            text,
            demo: true
        }
        //Wrap this in a try catch block
        try {
        //Imported function for creating a collection
        addDoc(ref, testData);
        console.log("You successfully completed your first POST request to your Firestore database.");
        dataUpdated(e);
        switchFeature(e, 'read');   
        return 
        } catch(err) {
        return console.log(err)
        }
    }

    return (
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
            <button 
                type="submit" 
                className={styles.button}
            >
            Submit
            </button>
        </form>
    )
};