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
        <div className={styles.modal}>
            <div className={styles.container}>
                <h1 className={styles.title}>Are you sure you want to delete this document?</h1>
                <div className={styles.buttonBox}>
                    <button 
                        type="button" 
                        className={styles.button}
                        onClick={handleDeleteModal}
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
            </div>
            <div className={styles.exitButtonBox}>
                <button 
                    type="button" 
                    onClick={handleDeleteModal}
                    className={styles.exitButton}
                >
                    X
                </button>
            </div>
        </div>
    )
}