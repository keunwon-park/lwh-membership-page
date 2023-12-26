import * as styles from "./Introduction.css";
import profileImage from "../../../assets/profile.png";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const introContainer = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textSection = useRef<HTMLDivElement>(null);
  const firstTextSection = useRef<HTMLDivElement>(null);
  const secTextSection = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<SVGTextElement>(null);
  const textRef2 = useRef<SVGTextElement>(null);
  const textRef3 = useRef<SVGTextElement>(null);
  const textRef4 = useRef<SVGTextElement>(null);
  const textRef5 = useRef<SVGTextElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(imageRef.current, { opacity: 0 }, { opacity: 1, delay: 0.5, duration: 2 });
      gsap.fromTo(textRef1.current, { opacity: 0 }, { opacity: 1, delay: 1, duration: 1 });
      gsap.fromTo(textRef2.current, { opacity: 0 }, { opacity: 1, delay: 1.5, duration: 1 });
      gsap.fromTo(textRef3.current, { opacity: 0 }, { opacity: 1, delay: 2, duration: 1 });
    },
    { scope: introContainer }
  );

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: introContainer.current,
        start: "top+=50 top",
        end: "center+=300 bottom",
        scrub: 2,
        markers: {
          startColor: "green",
          endColor: "red",
          fontSize: "12px",
        },
      },
    });

    tl.to(textRef1.current, { y: -100, opacity: 0, duration: 1 })
      .to(textRef2.current, { y: -100, opacity: 0, duration: 1 }, "-=0.5")
      .to(textRef3.current, { y: -100, opacity: 0, duration: 1 }, "-=0.5")
      .to(secTextSection.current, { y: -853, opacity: 1, duration: 1 }, "-=1");

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: introContainer.current,
        start: "center+=300 center",
        end: "bottom center",
        scrub: 2,
        onEnter: () => {
          console.log("Entered");
        },
        onLeave: () => {
          console.log("Left");
        },
      },
    });

    tl2.to(imageRef.current, { x: -100, opacity: 0, duration: 1, ease: "power1.inOut" });
    tl2.to(textRef4.current, { x: +100, opacity: 0, duration: 0.5, ease: "power1.inOut" }, "-=0.5");
    tl2.to(textRef5.current, { x: +100, opacity: 0, duration: 1, ease: "power1.inOut" }, "-=1");

    return () => {
      tl.kill();
      tl2.kill();
    };
  }, []);

  return (
    <section ref={introContainer} className={styles.introContainer}>
      <div className={styles.introImageContainer} ref={imageRef}>
        <img className={styles.profileImage} src={profileImage} alt='프로필' />
      </div>
      <div id='box' className={styles.introTextContainer} ref={textSection}>
        <div className={styles.introTextBox} ref={firstTextSection}>
          <svg viewBox='0 -100 500 400' xmlns='http://www.w3.org/2000/svg'>
            <text ref={textRef1} x='52%' y='5%' textAnchor='middle' fontSize={"70px"}>
              안녕하세요
            </text>
            <text ref={textRef2} x='45%' y='25%' textAnchor='middle' fontSize={"70px"}>
              가난한백수
            </text>
            <text ref={textRef3} x='44%' y='45%' textAnchor='middle' fontSize={"70px"}>
              이원형입니다
            </text>
          </svg>
        </div>
        <div className={styles.introTextBox} ref={secTextSection}>
          <svg viewBox='0 0 500 400' xmlns='http://www.w3.org/2000/svg'>
            <text ref={textRef4} x='40%' y='50%' textAnchor='middle' fontSize={"60px"}>
              멤버쉽을
            </text>
            <text ref={textRef5} x='40%' y='70%' textAnchor='middle' fontSize={"60px"}>
              소개합니다
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
