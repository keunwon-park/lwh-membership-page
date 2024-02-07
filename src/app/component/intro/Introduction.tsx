import * as styles from "./Introduction.css";
import Observer from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Introduction = () => {
  const introContainer = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textSection = useRef<HTMLDivElement>(null);
  const firstTextSection = useRef<HTMLDivElement>(null);
  const secTextSection = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scrollObserver = Observer.create({
        type: "wheel,touch,scroll",
        preventDefault: true,
      });

      gsap.from(imageRef.current, {
        xPercent: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.In",
      });

      gsap.from(`.${styles.firstIntroText}`, {
        xPercent: +30,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        delay: 0.5,
        ease: "power2.In",
        onComplete: () => {
          console.log("complete");
          scrollObserver.kill();
        },
      });
    },
    { dependencies: [], scope: introContainer },
  );

  useGSAP(
    () => {
      const introductionTl = gsap.timeline({
        scrollTrigger: {
          trigger: introContainer.current,
          start: "top+=10 top",
          end: "+=2000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          toggleActions: "play reverse play reverse",
        },
      });

      introductionTl.to(`.${styles.firstIntroText}`, {
        xPercent: 50,
        yPercent: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.InOut",
      });

      if (secTextSection.current === null) return;

      introductionTl.to(`.${styles.secIntroText}`, {
        y: -872,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: textSection },
  );

  return (
    <section ref={introContainer} className={styles.introContainer} id="intro">
      <div className={styles.introImageContainer} ref={imageRef}>
        <img
          className={styles.profileImage}
          src={`/images/profile.png`}
          alt="프로필"
        />
      </div>
      <div id="box" className={styles.introTextContainer} ref={textSection}>
        <div className={styles.introTextBox} ref={firstTextSection}>
          <p className={styles.firstIntroText}>안녕하세요</p>
          <p className={styles.firstIntroText}>가난한 백수</p>
          <p className={styles.firstIntroText}>이원형입니다</p>
        </div>
        <div className={styles.introTextBox} ref={secTextSection}>
          <p className={styles.secIntroText}>멤버쉽을</p>
          <p className={styles.secIntroText}>소개합니다</p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
