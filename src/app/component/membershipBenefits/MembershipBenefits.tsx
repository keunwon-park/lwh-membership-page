import * as styles from "./MembershipBenefits.css";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const MembershipBenefits = () => {
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
  const MembershipBenefitsContainerRef = useRef<HTMLDivElement>(null);
  const membershipBenefitsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const refs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    benefitsData.map(() => React.createRef<HTMLDivElement>())
  );
  const benefitsContainerRef = useRef<HTMLDivElement>(null);

  // Introduction의 end와 membershipBenefits의 start와 곂쳐서 문제가 발생했음. end에 start가 딸려서 올라옴
  useGSAP(
    () => {
      const membershipBenefitsTl = gsap.timeline({
        scrollTrigger: {
          trigger: MembershipBenefitsContainerRef.current,
          start: "top top",
          end: "bottom top-=150",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          markers: {
            startColor: "blue",
            endColor: "black",
            fontSize: "25px",
          },
        },
      });
    },
    { scope: MembershipBenefitsContainerRef }
  );

  return (
    <section ref={MembershipBenefitsContainerRef} className={styles.MembershipBenefitsContainer}>
      <div>{/* 등급별 내용 */}</div>
      <div>
        <div>
          <h2>등급별 혜택</h2>
          <button>Upgrade Now</button>
        </div>
        <ul>
          {benefitsData.map((benefit, index) => (
            <li key={index}>
              <div>
                <img src='' alt='' />
              </div>
              <div>
                <p>{benefit.title}</p>
                {benefit.benefits.map((benefit) => (
                  <p key={benefit.id}>{benefit.benefit}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MembershipBenefits;
