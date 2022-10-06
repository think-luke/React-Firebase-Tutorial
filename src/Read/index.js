//React
import { useState, useEffect } from 'react';
//Components
import DemoCard from "../Cards/DemoCard";
//Styling
import styles from './Read.module.css';
//Firestore
import { firestore } from "../firebase";
import { query, getDocs, where, collection } from '@firebase/firestore';

export default function Read() {
    const [loaded, setLoaded] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [updated, setUpdated] = useState(false);
    const [retrievedData, setRetrievedData] = useState("");
    const demoReference = collection(firestore, "demo_collection");

    useEffect(() => {
        const fetchData = async() => {
            setFetching(true);
            //Going to set state to an array of objects
            const dataArr = [];
            //Simple query object with the demoReference we wrote
            const q = query(demoReference, where("demo", "==", true));
            //Retrieve results with query object
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(doc => {
                console.log(doc.id, " => ", doc.data());
                const obj = {id: doc.id, data: doc.data()}
                dataArr.push(obj)
            }) 
            //Set the state to the retrieved data
            setRetrievedData(dataArr);
            setFetching(false)   
        }
        fetchData()
        .catch(console.error);
        setUpdated(false);
        return 
    },[updated]);

    useEffect(() => {
        retrievedData.length ? setLoaded(true) : setLoaded(false);
    },[retrievedData]);

    const dataUpdated = (e) => {
        e.preventDefault();
        return setUpdated(true);
    }

    if(fetching) {
        return <div>Loading...</div>
    }

    if(!loaded && !fetching) {
        return <div>No data to show...</div>
    } else {
        return (
            <>
                {retrievedData.map(event => (
                    <DemoCard key={event.id} event={event} dataUpdated={dataUpdated}/>
                ))}
            </>
        )
    } 
}