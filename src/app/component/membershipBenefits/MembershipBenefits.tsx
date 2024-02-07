import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as styles from "./MembershipBenefits.css";
import { membershipBenefitsData } from "../../../assets/MembershipBenefits";

const MembershipBenefits = () => {
  const benefitsListRef = useRef<HTMLDivElement>(null);
  const membershipBenefitsContainerRef = useRef<HTMLDivElement>(null);
  const membershipBenefitsDataRef = useRef<HTMLUListElement>(null);
  const membershipHeadingRef = useRef<HTMLDivElement>(null);
  const membershipBenefitsListRef = useRef<HTMLUListElement>(null);
  const isAnimatingRef = useRef(false);

  const defaultTitle = membershipBenefitsData[0].title;
  const [selectedTitle, setSelectedTitle] = useState(defaultTitle);
  const selectedBenefits = membershipBenefitsData.find(
    (benefit) => benefit.title === selectedTitle,
  )?.benefits;
  const handleItemClick = (title: string): void => {
    if (!isAnimatingRef.current) {
      setSelectedTitle(title);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, title: string): void => {
    if (e.key === "Enter") {
      handleItemClick(title);
    }
  };

  useGSAP(() => {
    const membershipBenefitsTl = gsap.timeline({
      scrollTrigger: {
        trigger: membershipBenefitsContainerRef.current,
        start: "top top",
        end: "bottom top-=200",
        pin: true,
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });

    membershipBenefitsTl.from(membershipBenefitsContainerRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.InOut",
    });

    membershipBenefitsTl.from(membershipHeadingRef.current, {
      yPercent: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.InOut",
    });

    membershipBenefitsTl.from(membershipBenefitsListRef.current, {
      xPercent: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.InOut",
    });

    membershipBenefitsTl.from(benefitsListRef.current, {
      xPercent: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.InOut",
    });
  });
  // benefitsList 전환 애니메이션
  useGSAP(
    () => {
      if (selectedBenefits && membershipBenefitsContainerRef.current) {
        isAnimatingRef.current = true;
        gsap.from(`.${styles.BenefitsListItem}`, {
          opacity: 0,
          x: -20,
          stagger: 0.1,
          duration: 0.5,
          onComplete: () => {
            isAnimatingRef.current = false;
            gsap.killTweensOf(`.${styles.BenefitsListItem}`);
          },
        });
      }
    },
    { dependencies: [selectedTitle], scope: membershipBenefitsDataRef },
  );

  return (
    <section
      ref={membershipBenefitsContainerRef}
      className={styles.MembershipBenefitsContainer}
    >
      <div ref={benefitsListRef} className={styles.BenefitsListWrapper}>
        <div className={styles.ImageWrapper}>
          <img
            className={styles.ImageStyle}
            src={"https://via.placeholder.com/400"}
            alt=""
          />
        </div>
        <ul ref={membershipBenefitsDataRef} className={styles.BenefitsList}>
          {selectedBenefits ? (
            selectedBenefits.map((benefit) => (
              <li key={benefit.id} className={styles.BenefitsListItem}>
                {benefit.benefit}
              </li>
            ))
          ) : (
            <p>혜택을 선택하세요.</p>
          )}
        </ul>
      </div>
      <div className={styles.MembershipListWrapper}>
        <div
          ref={membershipHeadingRef}
          className={styles.MembershipHeadingWrapper}
        >
          <h2 className={styles.MembershipHeading}>등급별 혜택</h2>
          <button className={styles.UpgradeButton}>Upgrade Now</button>
        </div>
        <ul ref={membershipBenefitsListRef}>
          {membershipBenefitsData.map((benefit, index) => (
            <li key={index} className={styles.MembershipListItem}>
              <img
                src={"https://via.placeholder.com/100"}
                alt={benefit.title}
                className={styles.MembershipListImage}
              />
              <button
                className={styles.MembershipListButton}
                onClick={() => handleItemClick(benefit.title)}
                onKeyDown={(e) => handleKeyDown(e, benefit.title)}
              >
                <strong>{benefit.title}</strong>
                <p>{benefit.description}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MembershipBenefits;
