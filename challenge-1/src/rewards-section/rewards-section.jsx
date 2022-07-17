import React from "react";
import "../uistyles.scss";
import styles from "./rewards-section.module.scss";
import { Button } from "../shared-components/button/button";
import { TermsConditions } from "./components/Terms-nd-conditions";
import Icon2 from "../assets/images/icons/icon2.png";
import Icon3 from "../assets/images/icons/icon3.png";
import Icon4 from "../assets/images/icons/icon4.png";
import Icon5 from "../assets/images/icons/icon5.png";
import Icon6 from "../assets/images/icons/icon6.png";
import Icon7 from "../assets/images/icons/icon7.png";
import Icon8 from "../assets/images/icons/icon8.png";
import { List } from "../shared-components/list/list";
import { AvailableRewards } from "./components/available-rewards";
import { Divider } from "../shared-components/divider/divider";
import { TierDetails } from "./components/tier-details";
import { Purchases } from "./components/purchases";

const Benefits = () => {
  return (
    <>
      <h1 className="white-color">Your Gold Benefits</h1>
      <div className={styles.benefitContent}>
        <div className={styles["benefit_item_content"]}>
          <img src={Icon5} height="102" width="120" />
          <List
            unordered={true}
            title="Free Tickets"
            listItems={[
              "1 free ticket issued on your birthday",
              " 1 free ticket for every 10 tickets purchased",
              "1 optional free ticket after reaching 500 food and beverage points",
            ]}
            containerClass={styles.listContainer}
            color="white"
          />
        </div>
        <div className={styles["benefit_item_content"]}>
          <img src={Icon6} height="102" width="120" />
          <List
            unordered={true}
            title="Free Food And Drinks"
            listItems={[
              `1 optional $5 free food and beverage voucher 
            after reaching 500 food and bevrage points`,
            ]}
            containerClass={styles.listContainer}
            color="white"
          />
        </div>
        <div className={styles["benefit_item_content"]}>
          <img src={Icon7} height="102" width="120" />
          <List
            unordered={true}
            title="Wednesday Special Pricing"
            listItems={[`5$ tickets every wednesday`]}
            containerClass={styles.listContainer}
            color="white"
          />
        </div>

        <div className={styles["benefit_item_content"]}>
          <img src={Icon8} height="102" width="120" />
          <List
            unordered={true}
            title="Earn Food And Beverage Points"
            listItems={[`earn 5x points for every dollar spent`]}
            color="white"
            containerClass={styles.listContainer}
          />
        </div>
      </div>
    </>
  );
};
export const RewardsSection = () => {
  return (
    <div className={`column ${styles.rewardSectionContainer}`}>
      <h1 className='white-color'>My CMX Rewards</h1>
      <Divider/>
      <TierDetails/>
      <Purchases/>
      <h1 className='white-color'>Available Rewards</h1>
      {
      [
        {
          rewardCategory: "Free Ticket Vouchers",
          rewards: [
            {
              icon: Icon2,
              name: "Birthday Free Voucher",
              expiry: Date.now(),
              btnText: "Reedem Now",
            },
            {
              icon: Icon2,
              name: "Ticket Voucher",
              expiry: new Date(new Date().getTime() + (62 * 60 * 60 * 1000)),
              btnText: "Reedem Now",
            },
            
          ],
        },
        {
          rewardCategory: "Free Ticket Vouchers",
          rewards: [
            {
              icon: Icon3,
              name: "Birthday $10 Voucher",
              expiry: Date.now(),
              btnText: "Scan Now",
            },
            {
              icon: Icon3,
              name: "Birthday $10 Voucher",
              expiry: Date.now(),
              btnText: "Scan Now",
            },
            {
              icon: Icon4,
              name: "$5 Voucher",
              expiry: new Date(new Date().getTime() + (62 * 60 * 60 * 1000)),
              btnText: "Scan Now",
            },
            
          ],
        },
      ].map(({ rewardCategory, rewards }) => (
        <AvailableRewards rewards={rewards} rewardCategory={rewardCategory} />
      ))}
      <Benefits />
      <TermsConditions />
      <Button text="View Other Plans" type="primary" className="raunak" />
    </div>
  );
};
