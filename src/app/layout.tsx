import * as styles from "./RootLayout.css";
import Footer from "./component/common/footer/Footer";
import HeaderNav from "./component/common/nav/HeaderNav";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className={styles.rootLayout}>
      <HeaderNav />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
