import * as styles from "./MembershipBenefits.css";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { membershipBenefitsData } from "../../../assets/MembershipBenefits";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const MembershipBenefits = () => {

  const membershipBenefitsContainerRef = useRef<HTMLDivElement>(null);
  const membershipBenefitsDataRef = useRef<HTMLUListElement>(null);

  // Introduction의 end와 membershipBenefits의 start와 곂쳐서 문제가 발생했음. end에 start가 딸려서 올라옴

  //-------------------
  const [selectedTitle, setSelectedTitle] = useState("");
  const selectedBenefits = membershipBenefitsData.find(benefit => benefit.title === selectedTitle)?.benefits;
  const handleItemClick = (title: string): void => {
    setSelectedTitle(title);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent, title: string): void => {
    if (e.key === 'Enter') {
      handleItemClick(title);
    }
  };
  //-------------------

  useGSAP(() => {
    if (selectedBenefits && membershipBenefitsContainerRef.current){
      gsap.from(`.${styles.BenefitsListItem}`, { 
        opacity: 0, 
        x: -20, 
        stagger: 0.1, 
        duration: 0.5,
      });
    }
  },  { dependencies:[selectedTitle],scope: membershipBenefitsDataRef }); 

  return (
    <section ref={membershipBenefitsContainerRef} className={styles.MembershipBenefitsContainer}>
      <div className={styles.BenefitsListWrapper}>
        <div>
          <img src="" alt="" />
        </div>
        <ul ref={membershipBenefitsDataRef}>
          {selectedBenefits ? 
            selectedBenefits.map(benefit => (
              <li key={benefit.id} className={styles.BenefitsListItem}>{benefit.benefit}</li>
            )) : <p>혜택을 선택하세요.</p>
          }
        </ul>
      </div>
      <div className={styles.MembershipListWrapper}>
        <div>
          <h2>등급별 혜택</h2>
          <button>Upgrade Now</button>
        </div>
          <ul>
          {membershipBenefitsData.map((benefit, index) => (
                  <li key={index}>
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
