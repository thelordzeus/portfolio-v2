const HomeAnimated = () => {
  return (
    <>
      <div className="group/wrap relative">
        <div className="relative h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth bg-blackGradient1 bg-cover">
          <div className="group flex h-screen w-full snap-start items-center justify-center">
            <div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal text-white">
                  Hello There!
                </div>
              </div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300 text-white">
                  I'm Lord Zeus.
                </div>
              </div>
            </div>
          </div>

          <div className="group flex h-screen snap-start snap-always items-center justify-center bg-greenGradient">
            <div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal text-white">
                  Happen's to be a
                </div>
              </div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300 text-white">
                  Full Stack Developer.
                </div>
              </div>
            </div>
          </div>

          <div className="group flex h-screen snap-start snap-always items-center justify-center bg-starFace bg-cover">
            <div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal text-white">
                  A Weekend's And
                </div>
              </div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300 text-white">
                  Juice WRLD Fan.
                </div>
              </div>
            </div>
          </div>

          <div className="group flex h-screen snap-start snap-always items-center justify-center bg-blackGradient2 bg-cover">
            <div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal text-white">
                  And
                </div>
              </div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300 text-white">
                  I love Dark Mode.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAnimated;
