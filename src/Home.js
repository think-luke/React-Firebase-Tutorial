//React 
import { useState, useEffect } from 'react';
//Firestore
import { firestore } from "./firebase";
import { query, getDocs, where, collection } from '@firebase/firestore';
//Styling
import styles from './Home.module.css';
//Components
import Create from './Create';
import Read from './Read';

function Home({ sessionUser, feature, switchFeature }) {
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
  },[updated, feature]);

  useEffect(() => {
      retrievedData.length ? setLoaded(true) : setLoaded(false);
  },[retrievedData]);

  const dataUpdated = (e) => {
      e.preventDefault();
      return setUpdated(true);
  }

  return (
    <div className={styles.app}>
      <div>
        <h1 className={styles.userInfo}>{`Hello ${sessionUser.name}!`}</h1>
      </div>
      {fetching && <div>Loading...</div>}
      {!loaded && !fetching && feature === 'read' && <div>No data to show...</div>}
      {!fetching && feature === 'create' && <Create dataUpdated={dataUpdated} switchFeature={switchFeature} sessionUser={sessionUser}/>}
      {loaded && !fetching  && feature === 'read' && <Read dataUpdated={dataUpdated} retrievedData={retrievedData}/>}
    </div>
  );
}

export default Home;
