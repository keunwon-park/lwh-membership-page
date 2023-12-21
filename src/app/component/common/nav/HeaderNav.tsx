import * as styles from "./HeaderNav.css";

const HeaderNav = () => {
  return (
    <nav className={styles.headerNav}>
      <ul className={styles.headerNavList}>
        <li>소개</li>
        <li>혜택</li>
        <li>가격</li>
        <li>구매페이지</li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
