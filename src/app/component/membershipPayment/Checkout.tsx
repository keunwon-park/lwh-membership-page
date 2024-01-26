import SponsorsReview from "../membershipPayment/sponsorsReview/SponsorsReview"
import MembershipPrice from "../membershipPayment/membershipPrice/MembershipPrice"
import * as styles from './Checkout.css'
const Checkout = () => {
  return (
    <section className={styles.CheckoutContainer}>
      <SponsorsReview />
      <MembershipPrice />
    </section>
  )
}

export default Checkout