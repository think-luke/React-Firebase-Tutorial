//React
import { useEffect } from "react";
//Styling
import styles from "./DemoCard.module.css";
//Icons
import docIcon from "../icons/document.png";
import profileIcon from "../icons/profile.png";
import calendarIcon from "../icons/calendar.png";
import editIcon from "../icons/edit.svg";
import deleteIcon from "../icons/delete.png";

export default function DemoCard({ event }) {
    return (
        <div className={styles.card}>
            <img 
                src={docIcon}
                alt="Document icon." 
                className={styles.icons}
            />
            <section className={styles.infoColumn}>
                <div className={styles.infoRow}>
                    <img 
                        src={profileIcon}
                        alt="Profile icon." 
                        className={styles.icons}
                    />
                    <h4>Username</h4>
                </div>
                <div className={styles.infoRow}>
                    <h3>Stored message:</h3>
                    <h4>{event.text}</h4>
                </div>
                <div className={styles.infoRow}>
                    <img 
                        src={calendarIcon} 
                        alt="Calendar icon." 
                        className={styles.icons}
                    />
                    <h4>Date</h4>
                </div>
            </section>
            <div className={styles.actionBox}>
                Edit your data:
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