//React
import { useState, useEffect } from 'react';
//Styling
import styles from './Read.module.css';
//Firestore
import { firestore } from "../firebase";
import { doc, getDoc, collection } from '@firebase/firestore';

export default function Read({ switchFeature }) {
    const docReference = doc(firestore, "demo_collection")

    useEffect(() => {

    },[])

    return (
        <div className={styles.card}>
            <img 
                src='../../icons/document.png' 
                alt="Document icon." 
                className={styles.icons}
            />
            <section className={styles.infoColumn}>
                <div className={styles.infoRow}>
                    <img 
                        src='../../icons/profile.png' 
                        alt="Profile icon." 
                        className={styles.icons}
                    />
                    <h4>Username</h4>
                </div>
                <div className={styles.infoRow}>
                    <h3>Stored message:</h3>
                    <h4>Message</h4>
                </div>
                <div className={styles.infoRow}>
                    <img 
                        src='../../icons/calendar.png' 
                        alt="Calendar icon." 
                        className={styles.icons}
                    />
                    <h4>Date</h4>
                </div>
            </section>
            <div className={styles.editBox}>
                Edit your data:
                <img 
                    src='../../icons/edit.svg' 
                    alt="Edit icon." 
                    className={styles.profileImage}
                />
            </div>
        </div>
    )
}