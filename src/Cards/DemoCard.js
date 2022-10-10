//React
import { useState } from "react";
//Components
import Update from "../Update";
import Destroy from "../Destroy";
//Styling
import styles from "./DemoCard.module.css";
//Icons
import docIcon from "../icons/document.png";
import editIcon from "../icons/edit.svg";
import deleteIcon from "../icons/delete.png";

export default function DemoCard({ sessionUser, event, dataUpdated }) {
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const handleEditModal = (e) => {
        e.preventDefault();
        setEditModal(!editModal);
        return
    }

    const handleDeleteModal = (e) => {
        e.preventDefault();
        setDeleteModal(!deleteModal);
        return
    }

    return (
        <>
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
                        className={styles.actionIcons}
                        onClick={handleEditModal}
                    />
                    <img 
                        src={deleteIcon}
                        alt="Delete icon." 
                        onClick={handleDeleteModal}
                        className={styles.actionIcons}
                    />
                </div>
            </div>
            {editModal && 
            <Update 
                event={event} 
                handleEditModal={handleEditModal} 
                dataUpdated={dataUpdated} 
                sessionUser={sessionUser}
            />}
            {deleteModal && 
            <Destroy
                event={event} 
                handleDeleteModal={handleDeleteModal} 
                dataUpdated={dataUpdated} 
            />}
        </>
    )
}