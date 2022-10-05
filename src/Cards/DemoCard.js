//React
import { useEffect } from "react";
//Styling
import styles from "./DemoCard.module.css";
//Icons
import docIcon from "../icons/document.png";
import editIcon from "../icons/edit.svg";
import deleteIcon from "../icons/delete.png";

export default function DemoCard({ event }) {
    console.log(event)
    return (
        <div className={styles.card}>
            <img 
                src={docIcon}
                alt="Document icon." 
                className={styles.icons}
            />
            <section className={styles.infoColumn}>
                <div className={styles.infoRow}>
                    <p className={styles.p1}>Document ID:</p>
                    <p className={styles.p2}>{event.id}</p>
                </div>
                <div className={styles.infoRow}>
                    <p className={styles.p1}>Stored message:</p>
                    <p className={styles.p2}>{event.data.text}</p>
                </div>
            </section>
            <div className={styles.actionBox}>
                <img 
                    src={editIcon}
                    alt="Edit icon." 
                    className={styles.icons}
                />
                <img 
                    src={deleteIcon}
                    alt="Delete icon." 
                    className={styles.icons}
                />
            </div>
        </div>
    )
}