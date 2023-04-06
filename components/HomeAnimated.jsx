const HomeAnimated = () => {
  return (
    <>
      <div className="group/wrap relative">
        <div className="relative h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
          <div className="group flex h-screen w-full snap-start items-center justify-center">
            <div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal">
                  Hello There!
                </div>
              </div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300">
                  I'm Lord Zeus.
                </div>
              </div>
            </div>
          </div>

          <div className="group flex h-screen snap-start snap-always items-center justify-center bg-green-500 bg-opacity-10">
            <div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal">
                  I'm a Full Stack Developer.
                </div>
              </div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300">
                  Anything
                </div>
              </div>
            </div>
          </div>

          <div className="group flex h-screen snap-start snap-always items-center justify-center bg-starFace bg-cover">
            <div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal text-white">
                  Activate
                </div>
              </div>
              <div className="overflow-hidden font-clash text-7xl font-medium">
                <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300 text-white">
                  On Scroll
                </div>
              </div>
            </div>
          </div>

          <div className="group flex h-screen snap-start snap-always items-center justify-center bg-black ">
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
