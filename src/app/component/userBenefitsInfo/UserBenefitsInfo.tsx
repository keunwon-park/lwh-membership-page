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
  const headingRef = useRef<HTMLHeadingElement>(null);
  const refs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    benefitsData.map(() => React.createRef<HTMLDivElement>())
  );
  const benefitsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=270 top",
          end: "center+=300 bottom",
          scrub: 2,
          markers: {
            startColor: "green",
            endColor: "red",
            fontSize: "12px",
          },
        },
      });

      // heading 애니메이션
      tl.fromTo(
        headingRef.current,
        { y: -100, opacity: 0 },
        { y: -10, opacity: 1, delay: 0.5, duration: 2, ease: "power1.inOut" },
        "-=0.5"
      );

      // benefitsContainer 애니메이션
      tl.fromTo(
        benefitsContainerRef.current,
        { y: 100, opacity: 0 },
        { y: 20, opacity: 1, delay: 0.5, duration: 2, ease: "power1.inOut" },
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
    },
    { scope: container }
  );

  return (
    <section ref={container} className={styles.UserBenefitsInfoContainer}>
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
  );
};

export default UserBenefitsInfo;
