import { useState } from 'react';
import styles from '../rewards-section.module.scss'

const Purchases=()=>{
    const [value,setVal]=useState(7)
    return(
        <>
        
        <h3 className='white-color'>Food And Beverage Purchases</h3>
        <span className='white-color' style={{paddingBottom:'24px'}}>Do 4 more food and beverage purchases to reach Platinum tier</span>
        <input type="range" value={value} min="1" max="7" step="1" onChange={(e)=>{setVal(e.target.value)}} className={`${styles.range} ${styles.tooltip}`} data-value={value}/>
        <div className='white-color'style={{textAlign:'center',width:'90%',paddingBottom:'24px'}}>{`Number of Tickets ${value}`}</div>
        <span style={{paddingBottom:'24px'}}>You have secured GOLD until 23rd September 2023</span>
        <div className={styles.circleContainer}>
        <div className={styles.circle}>
            <div className={styles.circle_text}>
                <h1>{value}</h1>
                 {`Tickets Purchased out of 20`}
            </div>
        </div>
        <div className={styles.circle} style={{border:'30px solid maroon'}}>
            <div className={styles.circle_text}>
                <h1>{500}</h1>
            {`Food and Beverage Points out of 500`}
            </div>
        </div>
        </div>
        </>
    )}

    export {Purchases}