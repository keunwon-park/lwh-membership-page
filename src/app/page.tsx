import Introduction from "./component/intro/Introduction";
import RootLayout from "./layout";
// import * as styles from "./MainPage.css";
const MainPage = () => {
  return (
    <RootLayout>
      {/* <h1 className={styles.mainPageHeading}>page Test</h1> */}
      <Introduction />
      <Introduction />
      <Introduction />
      <Introduction />
    </RootLayout>
  );
};

export default MainPage;
