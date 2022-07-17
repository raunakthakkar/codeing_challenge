import React from "react";
import PropTypes from 'prop-types'
import styles from './user-details.module.scss'
import displayPicture from './temprary-display-picture.webp'
import {Button} from '../shared-components/button/button'

const NavBar=()=>{return (<nav>
  <a href="">My Dashboard</a> 
  <a href="">Booking History</a> 
  <a href="">Managed Saved Cards</a> 
  <a href="">Rewards</a>
  <a href="">Plan a movie party</a> 
  <a href="">Gift Cards</a> 
  <a href="">watchlist</a> 
  <a href="">Preference</a>
  <a href="">logout</a>

</nav>)}

 const UserDetails = ({name,email,points}) => {
 
  return <div className={`column ${styles.userDetailsContainer}`}>
    <div className={styles.userDetailContent}>
    <img className={styles.circle} src={displayPicture} width='140' height='120' alt="profile_picture"/>
    <div>{name}</div>
   <div> {email}</div>
    <Button type="secondary" className={styles.btn} text="Edit Profile"/>
          <div>your CMX lifetime points {points}</div>
    </div>
    <NavBar/>
    </div>
};


UserDetails.propTypes={
  name:PropTypes.string,
  email:PropTypes.string,
  points:PropTypes.number
}

export {UserDetails}