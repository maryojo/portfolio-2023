import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import IntroPanel from "../components/IntroPanel";
import SecondPanel from "../components/SecondPanel";
import Navbar from "../components/Navbar";
import { Box, Flex, Spacer, Image } from "@chakra-ui/react";
import '../index.css';

gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel"); //
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          // snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
  <Box pos={'relative'}>
    <Navbar />
      <Box ref={component} pos={"relative"}>
        <Box ref={slider} className="container">
          <IntroPanel />
          {/* <div className="panel">
            <SecondPanel />
          </div> */}
          <div className="panel orange">TWO</div>
          <div className="panel purple">THREE</div>
        </Box>
        <div className="lastContainer">Last Container</div>
        <h1>Heloooooooo</h1>
      </Box>
    </Box>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
