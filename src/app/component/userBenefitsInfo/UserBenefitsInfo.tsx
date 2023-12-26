import * as styles from "./UserBenefitsInfo.css";

const UserBenefitsInfo = () => {
  const benefitsData = [
    {
      title: "라이트 혜택",
      benefits: [
        { id: "1", benefit: "기상, 취침 시간 알림권" },
        { id: "2", benefit: "일 1회 게임 동원권" },
        { id: "3", benefit: "일 1회 롤 서렌 거부권" },
        { id: "4", benefit: "하루 먹는 음식 사진 제공" },
      ],
    },
    {
      title: "일반 혜택",
      benefits: [
        { id: "1", benefit: "일반 혜택 1" },
        { id: "2", benefit: "일반 혜택 2" },
        { id: "3", benefit: "일반 혜택 3" },
        { id: "4", benefit: "일반 혜택 4" },
      ],
    },
    {
      title: "프리미엄 혜택",
      benefits: [
        { id: "1", benefit: "프리미엄 혜택 1" },
        { id: "2", benefit: "프리미엄 혜택 2" },
        { id: "3", benefit: "프리미엄 혜택 3" },
        { id: "4", benefit: "프리미엄 혜택 4" },
      ],
    },
  ];

  return (
    <section className={styles.UserBenefitsInfoContainer}>
      <h2 className={styles.UserBenefitsHeading}>멤버쉽 등급에 따른 혜택</h2>
      <div className={styles.UserBenefitsGridContainer}>
        {benefitsData.map(({ title, benefits }) => (
          <div className={styles.UserBenefitsGridItem} key={title}>
            <span className={styles.UserBenefitsTag}>{title}</span>
            <ul className={styles.UserBenefitsList}>
              {benefits.map(({ id, benefit }) => (
                <li className={styles.UserBenefitsListItem} key={id}>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserBenefitsInfo;
