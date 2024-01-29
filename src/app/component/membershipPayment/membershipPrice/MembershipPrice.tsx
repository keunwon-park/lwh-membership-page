import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import * as styles from "./MembershipPrice.css";

const MembershipPrice = () => {
  const membershipPriceContainerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const membershipPriceTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#membershipPriceContainer",
        start: "top",
        end: "bottom top-=150",
        scrub: 1,
        // markers: {
        //   startColor: "deepskyblue",
        //   endColor: "gray",
        //   fontSize: "35px",
        // },
      },
    });
    membershipPriceTl.fromTo(
      membershipPriceContainerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  });
  return (
    <section
      className={styles.MembershipPriceContainer}
      id='membershipPriceContainer'
      ref={membershipPriceContainerRef}
    >
      <h2>멤버쉽 가격 안내</h2>
      <div>
        <strong>라이트</strong>
        <div>QR 코드이미지</div>
        <div> 990원</div>
      </div>
      <div>
        <strong>스탠다드</strong>
        <div>QR 코드이미지</div>
        <div> 1,990원</div>
      </div>
      <div>
        <strong>프리미엄</strong>
        <div>QR 코드이미지</div>
        <div> 4,990원</div>
      </div>
    </section>
  );
};

export default MembershipPrice;
