import styles from "../styles/components/Profile.module.css";

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/victoriatrindade.png" alt="Victoria Trindade"/>
            <div>
                <strong>Victória Trindade</strong>
                <p>
                    <img src="icons/level.svg" alt="Current Level"/>
                    Level 1</p>
            </div>
           

        </div>
    )
}