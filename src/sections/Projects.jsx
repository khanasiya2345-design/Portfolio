const Projects = () => {
  return (
    <section id="projects" className="px-4 py-6 md:px-8">
      <div className="rounded-[40px] bg-[#f5f5f3] px-6 py-20 md:px-12 lg:px-20">

        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
            A project built around a{" "}
            <span className="text-neutral-400">
              real organizational problem.
            </span>
          </h2>
        </div>

        {/* Project card */}
        <article className="mt-14 overflow-hidden rounded-[30px] bg-white shadow-sm">

          {/* Project visual */}
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#e8e7e4] px-8 py-16">

            {/* Decorative elements */}
            <div className="absolute left-8 top-8 h-16 w-16 rounded-full border border-neutral-300" />
            <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-neutral-300" />

            <div className="relative text-center">
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
                Final Year Project
              </p>

              <h3 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-neutral-800 md:text-5xl">
                Governance-Constrained
                <br />
                Decision Support System
              </h3>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-neutral-500">
                Risk-aware digital transformation decision support
              </p>
            </div>
          </div>

          {/* Project information */}
          <div className="p-7 md:p-10">

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#f5f5f3] px-4 py-2 text-xs text-neutral-600">
                Python
              </span>

              <span className="rounded-full bg-[#f5f5f3] px-4 py-2 text-xs text-neutral-600">
                Streamlit
              </span>

              <span className="rounded-full bg-[#f5f5f3] px-4 py-2 text-xs text-neutral-600">
                Machine Learning
              </span>

              <span className="rounded-full bg-[#f5f5f3] px-4 py-2 text-xs text-neutral-600">
                Technology Governance
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-sm leading-7 text-neutral-500 md:text-base">
              A risk-aware decision support system designed to evaluate
              governance, data, cybersecurity and technology readiness before
              recommending whether an organization should proceed with a
              digital transformation initiative.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-500 md:text-base">
              The system combines structured scoring, governance rules and an
              advisory machine-learning layer to make technology decisions
              more transparent and risk-aware.
            </p>

            {/* Project status */}
            <div className="mt-8 flex items-center gap-3 border-t border-neutral-100 pt-6">
              <span className="h-2 w-2 rounded-full bg-neutral-800" />

              <span className="text-xs text-neutral-400">
                Academic Project · 2026
              </span>
            </div>

          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;