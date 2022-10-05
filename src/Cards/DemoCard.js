//React
import { useState } from "react";
//Firebase/Firestore
import { firestore }from "../firebase";
import { doc, deleteDoc } from "firebase/firestore"
//Components
import Update from "../Update";
//Styling
import styles from "./DemoCard.module.css";
//Icons
import docIcon from "../icons/document.png";
import editIcon from "../icons/edit.svg";
import deleteIcon from "../icons/delete.png";

export default function DemoCard({ event }) {
    const [editModal, setEditModal] = useState(false);

    const handleDelete = async(e) => {
        e.preventDefault();
        await deleteDoc(doc(firestore, "demo_collection", `${event.id}`));
        return console.log("You successfully deleted a single document from Firestore.")
    }

    const handleEdit = (e) => {
        e.preventDefault();
        setEditModal(!editModal);
        return
    }

    return (
        <div className={styles.card}>
            <div className={styles.docIconBox}>
                <img 
                    src={docIcon}
                    alt="Document icon." 
                    className={styles.icons}
                />    
            </div>
            <section className={styles.infoColumn}>
                <div className={styles.infoRow1}>
                    <p className={styles.p1}>Document ID:</p>
                    <p className={styles.p2}>{event.id}</p>
                </div>
                <div className={styles.infoRow2}>
                    <p className={styles.p1}>Stored message:</p>
                    <p className={styles.p2}>{event.data.text}</p>
                </div>
            </section>
            <div className={styles.actionBox}>
                <img 
                    src={editIcon}
                    alt="Edit icon." 
                    className={styles.icons}
                    onClick={handleEdit}
                />
                <img 
                    src={deleteIcon}
                    alt="Delete icon." 
                    onClick={handleDelete}
                    className={styles.icons}
                />
            </div>
            {editModal && <Update event={event}/>}
        </div>
    )
}