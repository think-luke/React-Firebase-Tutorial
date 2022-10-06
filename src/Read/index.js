//React
import { useEffect } from 'react';
//Components
import DemoCard from "../Cards/DemoCard";
//Styling
import styles from './Read.module.css';

export default function Read({ retrievedData, dataUpdated }) {
    // useEffect(() => {
    //     return console.log(retrievedData)
    // },[retrievedData])

    return (
        <>
            {retrievedData.map(event => (
                <DemoCard key={event.id} event={event} dataUpdated={dataUpdated}/>
            ))}
        </> 
    )
};