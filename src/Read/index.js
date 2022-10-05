//React
import { useState, useEffect } from 'react';
//Components
import DemoCard from "../Cards/DemoCard";
//Styling
import styles from './Read.module.css';
//Firestore
import { firestore } from "../firebase";
import { query, getDocs, where, collection } from '@firebase/firestore';

export default function Read({ switchFeature }) {
    const [loaded, setLoaded] = useState(false);
    const [retrievedData, setRetrievedData] = useState("");
    const demoReference = collection(firestore, "demo_collection")

    useEffect(() => {
        const fetchData = async() => {
            //Going to set state to an array of objects
            const dataArr = [];
            //Simple query object
            const q = query(collection(firestore, "demo_collection"), where("demo", "==", true));
            //Retrieve results with query object
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(doc => {
                console.log(doc.id, " => ", doc.data());
                const obj = {id: doc.id, data: doc.data()}
                dataArr.push(obj)
            }) 
            //Set the state to the retrieved data
            setRetrievedData(dataArr);   
        }
        fetchData()
        .catch(console.error)
    },[])

    useEffect(() => {
        retrievedData.length ? setLoaded(true) : setLoaded(false);
    },[retrievedData])

    if(!loaded) {
        return (
            <div>No data to show...</div>  
        )
    } else {
        return (
            <>
                {retrievedData.map(event => (
                    <DemoCard key={event.text} event={event} />
                ))}
            </>
        )
    } 
}