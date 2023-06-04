import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../assets/animations/coding-screen.json";

const LottieControl = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    var animDuration = 1000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData,
    });

    function animateBodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

      anim.goToAndStop(frame, true);
    }

    const onScroll = () => {
      animateBodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div style={{ width: "35rem" }} ref={lottieRef}></div>;
};

export default LottieControl;
