import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox(){
    const hasactivechallenge = true;



    return(
<div className={styles.challengeBoxContainer}>
    {hasactivechallenge ? (
        <div className={styles.challengeActive}>
            <header> Ganhe 400 xp</header>
            <main> 
                <img src="icons/body.svg" alt="Body"/>
                <strong> Novo desafio</strong>
                <p>Levante e faça 3 polichinelos</p>
            </main>

            <footer>
                <button 
                type='button'
                className={styles.challengeFailedButton}
                >Falhei</button>
               
                <button 
                className={styles.challengeSucceededButton}
                type='button'
                >Completei</button>
            </footer>
        </div>
    ) : (
        <div className={styles.challengeNotActive}>
        <strong>
        Finalize um ciclo para receber desafios
        </strong>
        <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance o Level completando os desafios
        </p>
    </div>
    )}
</div>

    )
}