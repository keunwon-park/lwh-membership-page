import RootLayout from "./layout";
import Introduction from "./component/intro/Introduction";
import CommonBenefits from "./component/membershipBenefits/CommonBenefits";
import MembershipBenefits from "./component/membershipBenefits/MembershipBenefits";
import Checkout from "./component/membershipPayment/Checkout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import * as styles from "./MainPage.css";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"});
ScrollTrigger.clearScrollMemory();
window.history.scrollRestoration = "manual";

const MainPage = () => {

  return (
    <RootLayout>
      <Introduction />
      <CommonBenefits />
      <MembershipBenefits />
      <Checkout />
    </RootLayout>
  );
};

export default MainPage;
