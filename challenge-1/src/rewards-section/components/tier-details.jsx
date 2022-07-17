import { Button } from "../../shared-components/button/button";
import { Divider } from "../../shared-components/divider/divider";
import { List } from "../../shared-components/list/list";
import styles from "../rewards-section.module.scss";

const TierDetails = () => {
  return (
    <div className={styles.tierDetails}>
      <div className={styles.tierDetailsHeader}>
        <div className={styles.currentTier}>
          <span className={styles.caption}>Current Tier</span>
          <span className={styles.tier}> GOLD </span>
        </div>
        <div className={styles.loyaltyNumber}>
          <span className={styles.caption}>Loyalty Number</span>
          <span className={styles.number}>1234567890</span>
        </div>
      </div>
      <Divider />
      <List
        listItems={[
          "Only 2 more food & Bevrage purchase to become platinum",
          "Buy 2 tickets to get your  next free ticket",
          "Earn 220 more food & beverage points to recive your next reward",
        ]}
        unordered={true}
        color="black"
      />
      <div className={styles.tierDetailsFooter}>
        <span>
          <Button type="primary" text="CMX REWARS QR CODE" />
        </span>
        <a>VIEW YOUR UNCLAIMED REWARDS</a>
      </div>
    </div>
  );
};
export { TierDetails };
