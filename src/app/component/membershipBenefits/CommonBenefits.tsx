import React from "react";
import * as styles from "./CommonBenefits.css";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { commonBenefitsData } from "../../../assets/CommonBenefits";

const CommonBenefits = () => {
  const commonBenefitsContainerRef = useRef<HTMLDivElement>(null);
  const commonBenefitsHeadingRef = useRef<HTMLHeadingElement>(null);
  const commonBenefitsItemWrapperRef = useRef<HTMLUListElement>(null);
  const commonBenefitsItemListrefs = useRef<Array<React.RefObject<HTMLLIElement>>>(
    commonBenefitsData.map(() => React.createRef<HTMLLIElement>())
  );

  useGSAP(() => {
    // CommonBenefits 영역
    const commonBenefitsTl = gsap.timeline({
      scrollTrigger: {
        trigger: commonBenefitsContainerRef.current,
        start: "top top",
        end: "bottom",
        scrub: 1,
        pin: true,
        markers: {
          startColor: "purple",
          endColor: "red",
          fontSize: "20px",
        },
      },
    });
  });

  return (
    <section
      className={styles.CommonBenefitsContainer}
      ref={commonBenefitsContainerRef}
      id='commonBenefitsContainer'
    >
      <div ref={commonBenefitsHeadingRef}>
        <h2 className={styles.CommonBenefitsHeading}>멤버쉽 혜택</h2>
        <p className={styles.CommonBenefitsComment}>
          후원해주시는 모든 분들께 공통 혜택을 드립니다.
        </p>
      </div>
      <ul className={styles.CommonBenefitsItemWrapper} ref={commonBenefitsItemWrapperRef}>
        {commonBenefitsData.map((benefit, index) => (
          <li
            key={benefit.id}
            className={styles.CommonBenefitItem}
            ref={commonBenefitsItemListrefs.current[index]}
          >
            <img
              src={benefit.image}
              alt={`${benefit.title} 이미지`}
              className={styles.CommonBenefitImage}
            />
            <div className={styles.CommonBenefitContent}>
              <h3>{benefit.title}</h3>
              <p>{benefit.benefit}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CommonBenefits;
