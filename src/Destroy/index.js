//React

//Styling
import styles from "./Destroy.module.css";
//Firestore

export default function Destroy({ event }) {

    const deleteEntry = (e) => {
        e.preventDefault();
        return
    };

    const closeModal = (e) => {
        e.preventDefault();
        return console.log("Close this modal.")
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Delete entry</h1>
            <form className={styles.form}>
                <label>{`Are you sure you want to delete: ${event}?`} </label>
                <div className={styles.buttonBox}>
                    <button 
                        type="submit" 
                        className={styles.button}
                        onClick={deleteEntry}
                    >
                        Confirm
                    </button>
                    <button 
                        type="button" 
                        className={styles.button}
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}