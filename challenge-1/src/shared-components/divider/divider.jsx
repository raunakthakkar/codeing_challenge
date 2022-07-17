import styles from './divider.module.scss'

const Divider=({children})=>{
    return<div className={styles.container}>
    <div className={styles.border} />
    {children&&<span className={styles.content}>
      {children}
    </span>}
    <div className={styles.border} />
  </div>
}

export {Divider}