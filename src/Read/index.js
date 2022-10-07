//Components
import DemoCard from "../Cards/DemoCard";
//Styling
import styles from './Read.module.css';

export default function Read({ sessionUser, retrievedData, dataUpdated }) {

    return (
        <>
            {retrievedData.map(event => (
                <DemoCard 
                    key={event.id} 
                    event={event} 
                    dataUpdated={dataUpdated}
                    sessionUser={sessionUser}
                />
            ))}
        </> 
    )
};