import * as styles from "./Introduction.css";
import profileImage from "../../../assets/profile.png";

const Introduction = () => {
  return (
    <section className={styles.introContainer}>
      <div className={styles.introImageContainer}>
        <img className={styles.profileImage} src={profileImage} alt='프로필' />
      </div>
      <div className={styles.introTextContainer}>
        <div>
          <svg viewBox='0 -100 500 300' xmlns='http://www.w3.org/2000/svg'>
            <text x='47%' y='-5%' textAnchor='middle' fontSize={"4rem"}>
              안녕하세요
            </text>
            <text x='40%' y='20%' textAnchor='middle' fontSize={"4rem"}>
              가난한백수
            </text>
            <text x='39%' y='45%' textAnchor='middle' fontSize={"4rem"}>
              이원형입니다
            </text>
          </svg>
        </div>
        <div>
          <svg viewBox='0 0 300 100' xmlns='http://www.w3.org/2000/svg'>
            <text x='40%' y='50%' textAnchor='middle' fontSize={"1.5rem"}>
              멤버쉽을 소개합니다
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
