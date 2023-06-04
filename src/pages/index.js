import React, { useEffect, useState } from "react";
import HorizontalScrollHome from "../components/HorizontalScrollHome";
import VerticalScrollHome from "../components/VerticalScrollHome";
import '../index.css';


const IndexPage = () => {
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHorizontal(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
    {isHorizontal ? (
      <HorizontalScrollHome />
    ) : (
      <VerticalScrollHome />
    )}
  </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
