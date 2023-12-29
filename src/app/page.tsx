import { useEffect } from "react";
import Introduction from "./component/intro/Introduction";
import UserBenefitsInfo from "./component/userBenefitsInfo/UserBenefitsInfo";
import RootLayout from "./layout";
// import * as styles from "./MainPage.css";
const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("scroll to top");
  }, []);
  return (
    <RootLayout>
      <Introduction />
      <UserBenefitsInfo />
    </RootLayout>
  );
};

export default MainPage;
