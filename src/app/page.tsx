import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Observer from "gsap/Observer";
import RootLayout from "./layout";
import Introduction from "./component/intro/Introduction";
import CommonBenefits from "./component/membershipBenefits/CommonBenefits";
import MembershipBenefits from "./component/membershipBenefits/MembershipBenefits";
import Checkout from "./component/membershipPayment/Checkout";
// import * as styles from "./MainPage.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);

ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
});

ScrollTrigger.clearScrollMemory("manual");
window.history.scrollRestoration = "manual";

const MainPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
