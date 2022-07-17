import PropTypes from "prop-types";
import { Button } from "../../shared-components/button/button";
import { Divider } from "../../shared-components/divider/divider";
import styles from '../rewards-section.module.scss'

const monthArr=['January','February','March','April','May','June','July','August','September','October','November','December']

const getExpiry=(expiry)=>{
    const futureDate=new Date(expiry)
    const diffInMs=futureDate.getTime()-new Date(new Date().getTime() + (48 * 60 * 60 * 1000));
    const showExpiryAlert = (((diffInMs/1000)/60)/60)<48;

    return(
        <span style={{color: showExpiryAlert? 'red':'white'}}>{`Expires on ${futureDate.getDate()} ${monthArr[futureDate.getMonth()]} ${futureDate.getFullYear()}`}</span>
    )
}
const AvailableRewards = ({ rewardCategory, rewards }) => {
  return (
    
   
    <div className={styles.rewardsContentContainer}>
      <Divider>{rewardCategory}</Divider>
      {rewards.map((reward) => (
        <div className={styles.reward}>
        <div className={styles.leftSection}>
          <img src={reward.icon} alt="reward_icon" />
          <div style={{display:'flex',flexDirection:'column'}}>
            <span className='white-color'>{reward.name}</span>
            {getExpiry(reward.expiry)}
          </div>
          </div>
          <Button type="secondary" text={reward.btnText} />
        </div>
      ))}
    </div>
  );
};

AvailableRewards.propTypes = {
  rewardCategory: PropTypes.string,
  rewards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      expiry: PropTypes.instanceOf(Date),
      btnText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export {AvailableRewards}