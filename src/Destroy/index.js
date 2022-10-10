//Firebase/Firestore
import { firestore }from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
//Styling
import styles from "./Destroy.module.css";
//Firestore

export default function Destroy({ event, dataUpdated, handleDeleteModal }) {

    const handleDelete = async(e) => {
        e.preventDefault();
        await deleteDoc(doc(firestore, "demo_collection", `${event.id}`));
        console.log("You successfully deleted a single document from Firestore.")
        dataUpdated(e);
        return handleDeleteModal(e)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Delete entry</h1>
            <form className={styles.form}>
                <label>{`Are you sure you want to delete this document?`} </label>
                <div className={styles.buttonBox}>
                    <button 
                        type="button" 
                        className={styles.button}
                        onClick={e => handleDeleteModal(e)}
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className={styles.button}
                        onClick={handleDelete}
                    >
                        Confirm
                    </button>
                </div>
            </form>
        </div>
    )
}