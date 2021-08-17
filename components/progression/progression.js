import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import style from "./progresison.module.scss";
import gsap from "gsap";

export default function Progression() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      ease: "none",
      background:"red",

      scrollTrigger: {
        scrub: 0.3,
      },
    });
  }, []);

  return <progress max="100%" value="0"></progress>;
}
