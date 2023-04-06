import anime from "animejs";
import Image from "next/image";
import { useEffect, useState } from "react";

const LoadingScreen = ({ finishLoading }) => {
  const [isMounted, setisMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });
    loader.add({
      targets: "#logo",
      delay: 0,
      scale: 1,
      duration: 1000,
      easing: "easeInOutExpo",
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setisMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <div
        className="flex h-screen items-center justify-center bg-black"
        isMounted={isMounted}
      >
        <Image
          id="logo"
          src="/zlogo.jpeg"
          alt="official zeus logo"
          width={200}
          height={200}
        />
        <h1 className="font-clash text-7xl font-medium text-white ">
          "First We Vibe
        </h1>
      </div>
    </>
  );
};

export default LoadingScreen;
