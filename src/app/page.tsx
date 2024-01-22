import RootLayout from "./layout";
import Introduction from "./component/intro/Introduction";
import CommonBenefits from "./component/membershipBenefits/CommonBenefits";
import MembershipBenefits from "./component/membershipBenefits/MembershipBenefits";
import MembershipPrice from "./component/membershipPrice/MembershipPrice";
import { useEffect } from "react";
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
      <MembershipPrice />
    </RootLayout>
  );
};

export default MainPage;
