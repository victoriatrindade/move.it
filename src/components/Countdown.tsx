import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeOut: NodeJS.Timeout;

export function Countdown(){

    const [time, setTime] = useState(0.1 * 60);
    const [isactive,setIsActive] = useState(false);
    const [hasFinished, setHasFinished]= useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,"0").split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,"0").split('');

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setTime(0.1*60);
    }

    useEffect( () => {
       if (isactive && time > 0){
           countdownTimeOut = setTimeout( () => {
               setTime(time-1);
           }, 1000)
       } else if (isactive && time==0){
           setHasFinished(true);
           setIsActive(false);

       }
    }, [isactive, time])

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
               <button  disabled type="button" className={styles.startCountdownButton} onClick={resetCountdown}>
               Ciclo encerrado
                </button>) 
            : ( <>
                {isactive ?
             (<button type="button" className={` ${styles.startCountdownButton} ${styles.startCountdownButtonActive}`} onClick={resetCountdown}>
               Abandonar ciclo
                </button>) 
            :(<button type="button" className={styles.startCountdownButton} onClick={startCountdown}>
            Iniciar ciclo
                </button>)}
            </>)}

        </div>

    );
}