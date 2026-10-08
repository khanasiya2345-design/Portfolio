const Focus = () => {
  const areas = [
    {
      number: "01",
      title: "AI & Data",
      description:
        "Exploring artificial intelligence, analytics and data-driven approaches to solving organizational problems.",
    },
    {
      number: "02",
      title: "Cybersecurity",
      description:
        "Interested in cybersecurity, risk management, security awareness and responsible technology adoption.",
    },
    {
      number: "03",
      title: "Technology Governance",
      description:
        "Connecting technology decisions with accountability, policies, compliance and organizational strategy.",
    },
    {
      number: "04",
      title: "Digital Transformation",
      description:
        "Understanding how organizations can adopt technology while balancing readiness, risk and business impact.",
    },
  ];

  return (
    <section className="px-4 py-6 md:px-8">
      <div className="rounded-[40px] bg-[#f5f5f3] px-6 py-20 md:px-12 lg:px-20">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">
              Areas of Focus
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
              Where technology meets{" "}
              <span className="text-neutral-400">
                real-world impact.
              </span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-neutral-500">
            Exploring the intersection of technology, organizations, risk and
            responsible digital change.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {areas.map((area) => (
            <article
              key={area.number}
              className="group flex min-h-[250px] flex-col justify-between rounded-[28px] border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs text-neutral-400">
                  {area.number}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-sm text-neutral-400 transition duration-300 group-hover:rotate-45 group-hover:text-neutral-800">
                  ↗
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-neutral-800">
                  {area.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-500">
                  {area.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Focus;