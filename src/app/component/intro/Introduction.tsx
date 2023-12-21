import * as styles from "./Introduction.css";
import profileImage from "../../../assets/profile.png";

const Introduction = () => {
  return (
    <section className={styles.introContainer}>
      <div className={styles.introImageContainer}>
        <img className={styles.profileImage} src={profileImage} alt='프로필' />
      </div>
      <div className={styles.introTextContainer}>
        <span>소개텍스트</span>
        <div>
          <p>안녕하세요</p>
          <p>가난한 백수</p>
          <p>이원형입니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
