const Hero = () => {
  return (
    <section id="home" className="px-4 pb-6 md:px-8">
      <div className="min-h-[700px] rounded-[40px] bg-[#f5f5f3] px-6 py-20 md:px-12 lg:px-20">
        
        <div className="flex min-h-[600px] flex-col items-center justify-center text-center">
          
          {/* Small label */}
          <div className="mb-8 rounded-full bg-white px-5 py-2 text-xs text-neutral-600 shadow-sm">
            Technology · Data · Governance
          </div>

          {/* Main heading */}
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-neutral-900 md:text-7xl lg:text-8xl">
            Building at the intersection of{" "}
            <span className="text-neutral-400">
              technology, data & impact.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-sm leading-6 text-neutral-500 md:text-base">
            BCA graduate exploring AI, cybersecurity, data analytics and
            technology governance to solve real-world organizational problems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[#202020] px-6 py-3 text-xs font-medium !text-white transition hover:bg-neutral-700"            >
              Explore My Work ↗
            </a>

            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-xs font-medium text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Let&apos;s Connect
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;