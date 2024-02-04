import SponsorsReview from "../membershipPayment/sponsorsReview/SponsorsReview";
import MembershipPrice from "../membershipPayment/membershipPrice/MembershipPrice";
import * as styles from "./Checkout.css";
import { useRef } from "react";

const Checkout = () => {
  const checkoutRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.CheckoutContainer} ref={checkoutRef}>
      <SponsorsReview />
      <MembershipPrice />
    </section>
  );
};

export default Checkout;
