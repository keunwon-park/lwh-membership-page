import * as styles from "./UserBenefitsInfo.css";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const container = useRef<HTMLDivElement>(null);
  const membershipBenefitsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const secondHeadingRef = useRef<HTMLHeadingElement>(null);
  const refs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    benefitsData.map(() => React.createRef<HTMLDivElement>())
  );
  const benefitsContainerRef = useRef<HTMLDivElement>(null);
  const plusImageRef = useRef<HTMLDivElement>(null);
  const commonBenefitsContainerRef = useRef<HTMLDivElement>(null);
  const commonBenefitsImageRef = useRef<HTMLImageElement>(null);
  const commonBenefitsListRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=1000",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          anticipatePin: -1,
          markers: {
            startColor: "blue",
            endColor: "black",
            fontSize: "25px",
          },
        },
      });

      // heading 애니메이션
      tl.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power1.out" }
      );

      // benefitsContainer 애니메이션
      tl.fromTo(
        benefitsContainerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.5, duration: 2, ease: "power1.inOut" },
        "-=1"
      );

      // li[0] 애니메이션
      tl.fromTo(
        refs.current[0].current,
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 2 },
        "-=2"
      );

      // li[1] 애니메이션
      tl.fromTo(
        refs.current[1].current,
        { xPercent: 0, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 2, ease: "power1.out" },
        "-=2"
      );

      // li[2] 애니메이션
      tl.fromTo(
        refs.current[2].current,
        { xPercent: -100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 2, ease: "power1.out" },
        "-=2"
      );

      // CommonBenefits 영역
      const commonBenefitsTl = gsap.timeline({
        scrollTrigger: {
          trigger: commonBenefitsContainerRef.current,
          start: "center+=415 top",
          end: "+=2000",
          scrub: 2,
          pin: container.current,
          anticipatePin: 1,
          markers: {
            startColor: "purple",
            endColor: "red",
            fontSize: "20px",
          },
        },
      });

      commonBenefitsTl.from(commonBenefitsContainerRef.current, {
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "power1.out",
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
        x: "-50%",
        opacity: 0,
        duration: 1,
        ease: "power1.In",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      {/* 멤버쉽 등급에 따른 혜택 영역 */}
      <section ref={membershipBenefitsRef} className={styles.UserBenefitsInfoContainer}>
        <h2 ref={headingRef} className={styles.UserBenefitsHeading}>
          멤버쉽 등급에 따른 혜택
        </h2>
        <div className={styles.UserBenefitsGridContainer} ref={benefitsContainerRef}>
          {benefitsData.map(({ title, benefits }, index) => (
            <div className={styles.UserBenefitsGridItem} key={title} ref={refs.current[index]}>
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

      {/* 공통 혜택 영역 */}
      <section className={styles.CommonBenefitsContainer} ref={commonBenefitsContainerRef}>
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
              {/* 리스트를 하드코딩 하지 말자 */}
              <li>결혼 시 축의금 더블</li>
              <li>위치가 어디든 소환가능 (月 1회)</li>
              <li>심부름 시키기 (상호간 동의 필요)</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UserBenefitsInfo;
