import { useEffect } from "react";
import RootLayout from "./layout";
import Introduction from "./component/intro/Introduction";
import CommonBenefits from "./component/membershipBenefits/CommonBenefits";
import MembershipBenefits from "./component/membershipBenefits/MembershipBenefits";
import MembershipPrice from "./component/membershipPayment/membershipPrice/MembershipPrice";
import SponsorsReview from "./component/membershipPayment/sponsorsReview/SponsorsReview";
// import * as styles from "./MainPage.css";
const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("scroll to top");
  }, []);

  return (
    <RootLayout>
      <Introduction />
      <CommonBenefits />
      <MembershipBenefits />
      <SponsorsReview />
      <MembershipPrice />
    </RootLayout>
  );
};

export default MainPage;
