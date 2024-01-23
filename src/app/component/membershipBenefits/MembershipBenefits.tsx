import * as styles from "./MembershipBenefits.css";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const MembershipBenefits = () => {
  const benefitsData = [
    {
      title: "라이트 혜택",
      description: "저렴한 가격으로 맛보기 기능을 제공합니다",
      benefits: [
        { id: "1", benefit: "기상, 취침 시간 알림권" },
        { id: "2", benefit: "일 1회 게임 동원권" },
        { id: "3", benefit: "일 1회 롤 서렌 거부권" },
        { id: "4", benefit: "3끼 사진 제공" },
      ],
    },
    {
      title: "일반 혜택",
      description: "기본 가격으로 표준혜택을 제공합니다",
      benefits: [
        { id: "1", benefit: "일반 혜택 1" },
        { id: "2", benefit: "일반 혜택 2" },
        { id: "3", benefit: "일반 혜택 3" },
        { id: "4", benefit: "일반 혜택 4" },
      ],
    },
    {
      title: "프리미엄 혜택",
      description: "일반 혜택에 더해 여러 추가 기능을 제공합니다",
      benefits: [
        { id: "1", benefit: "프리미엄 혜택 1" },
        { id: "2", benefit: "프리미엄 혜택 2" },
        { id: "3", benefit: "프리미엄 혜택 3" },
        { id: "4", benefit: "프리미엄 혜택 4" },
      ],
    },
  ];
  //-------------------
  const [selectedTitle, setSelectedTitle] = useState("");

  // 오른쪽 리스트 아이템 클릭 핸들러
  const selectedBenefits = benefitsData.find(benefit => benefit.title === selectedTitle)?.benefits;
  const handleItemClick = (title: string): void => {
    setSelectedTitle(title);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent, title: string): void => {
    if (e.key === 'Enter') {
      handleItemClick(title);
    }
  };
  //-------------------

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
            <div style={{ flex: 1 }}>
        <ul>
          {selectedBenefits ? 
            selectedBenefits.map(benefit => (
              <li key={benefit.id}>{benefit.benefit}</li>
            )) : <p>혜택을 선택하세요.</p>
          }
        </ul>
      </div>
      <div>
        <div>
          <h2>등급별 혜택</h2>
          <button>Upgrade Now</button>
        </div>
        <div style={{ flex: 1 }}>
        <ul>
          {benefitsData.map((benefit, index) => (
                  <li key={index}>
                  <button 
                    onClick={() => handleItemClick(benefit.title)}
                    onKeyDown={(e) => handleKeyDown(e, benefit.title)}
                    style={{ all: 'unset', cursor: 'pointer' }}
                  >
                    <strong>{benefit.title}</strong>
                    <p>{benefit.description}</p>
                  </button>
                </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;
