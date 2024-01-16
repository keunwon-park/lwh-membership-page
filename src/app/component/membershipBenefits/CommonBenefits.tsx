import * as styles from "./CommonBenefits.css";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const CommonBenefits = () => {
  const secondHeadingRef = useRef<HTMLHeadingElement>(null);
  const plusImageRef = useRef<HTMLDivElement>(null);
  const commonBenefitsContainerRef = useRef<HTMLDivElement>(null);
  const commonBenefitsImageRef = useRef<HTMLImageElement>(null);
  const commonBenefitsListRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    // CommonBenefits 영역
    const commonBenefitsTl = gsap.timeline({
      scrollTrigger: {
        trigger: commonBenefitsContainerRef.current,
        start: "center+=65% top",
        end: "bottom",
        scrub: 1,
        pin: commonBenefitsContainerRef.current,
        markers: {
          startColor: "purple",
          endColor: "red",
          fontSize: "20px",
        },
      },
    });

    commonBenefitsTl.from(plusImageRef.current, {
      y: -100,
      opacity: 0,
      duration: 2,
      ease: "power1.out",
    });

    // secondHeadingRef에 대한 애니메이션을 수정합니다.
    commonBenefitsTl.fromTo(
      secondHeadingRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power1.out" }
    );

    commonBenefitsTl
      .fromTo(
        commonBenefitsImageRef.current,
        { rotation: 0, scale: 0, borderRadius: 20 },
        { y: -20, rotation: 360, scale: 0.7, borderRadius: 50, duration: 2, ease: "power1.out" }
      )
      .to(commonBenefitsImageRef.current, { opacity: 0.2, duration: 1, ease: "power1.out" });

    // 리스트 래퍼 애니메이션
    commonBenefitsTl.from(commonBenefitsListRef.current, {
      x: "-40%",
      opacity: 0,
      duration: 1,
      ease: "power1.In",
    });
  });

  return (
    <section
      className={styles.CommonBenefitsContainer}
      ref={commonBenefitsContainerRef}
      id='commonBenefitsContainer'
    >
      <div className={styles.PlusImage} ref={plusImageRef}>
        <img src='/src/assets/plus.png' alt='더하기' width={80} height={80} />
      </div>
      <h2 ref={secondHeadingRef} className={styles.UserBenefitsHeading}>
        후원 해주시는 모든 분께 !!
      </h2>
      {/* 리스트 wrapper */}
      <div className={styles.ImageContainer}>
        <img
          ref={commonBenefitsImageRef}
          src='/src/assets/gatsby.png'
          alt='gatsby'
          className={styles.ImageStyle}
        />
        <div className={styles.CommonBenefitsList}>
          <ul ref={commonBenefitsListRef}>
            <li>결혼 시 축의금 더블 + α</li>
            <li>위치가 어디든 소환가능 (月 1회)</li>
            <li>심부름 시키기 (상호간 동의 필요)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CommonBenefits;
