
import { paymentData } from "../../../../assets/PaymentData";
import * as styles from "./MembershipPrice.css";

const MembershipPrice = () => {


  return (
    <section className={styles.MembershipPriceContainer}>
    <h2>멤버쉽 가격 안내</h2>
    <ul className={styles.MembershipLevelList}>
      {paymentData.map((membershipLevel) => (
        <li key={membershipLevel.title} className={styles.MembershipLevelItem}>
          <strong>{membershipLevel.title}</strong>
          <div>
            <img
              src="https://via.placeholder.com/100"
              alt={membershipLevel.title}
              />
          </div>
          <div>{membershipLevel.가격.toLocaleString()}원</div>
        </li>
      ))}
    </ul>
  </section>
  );
};

export default MembershipPrice;
