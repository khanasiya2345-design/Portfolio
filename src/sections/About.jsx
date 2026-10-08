const About = () => {
  return (
    <section id="about" className="px-4 py-6 md:px-8">
      <div className="rounded-[40px] bg-[#f5f5f3] px-6 py-20 md:px-12 lg:px-20">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* Left side */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">
              About Me
            </p>

            <h2 className="max-w-lg text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
              Technology,
              <br />
              but with a focus on{" "}
              <span className="text-neutral-400">
                people.
              </span>
            </h2>
          </div>

          {/* Right side */}
          <div className="max-w-2xl">

            <p className="text-lg leading-8 text-neutral-700 md:text-xl">
              I&apos;m a BCA graduate interested in how technology can be used
              to solve organizational problems responsibly.
            </p>

            <p className="mt-6 text-sm leading-7 text-neutral-500 md:text-base">
              My interests include artificial intelligence, cybersecurity,
              data analytics, digital transformation and technology
              governance. I enjoy exploring the space between technical
              systems and the people and organizations that use them.
            </p>

            {/* Interest tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-600">
                Artificial Intelligence
              </span>

              <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-600">
                Cybersecurity
              </span>

              <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-600">
                Data Analytics
              </span>

              <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-600">
                Technology Governance
              </span>

              <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-600">
                Digital Transformation
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;