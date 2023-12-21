import * as styles from "./RootLayout.css";
import HeaderNav from "./component/common/nav/HeaderNav";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.rootLayout}>
      <HeaderNav />
      {children}
    </div>
  );
};

export default RootLayout;
