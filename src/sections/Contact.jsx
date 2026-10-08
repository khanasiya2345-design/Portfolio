const Contact = () => {
  return (
    <section id="contact" className="px-4 py-6 md:px-8">
      <div className="rounded-[40px] bg-[#202020] px-6 py-20 text-white md:px-12 lg:px-20">
        
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
            Get In Touch
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
            Let&apos;s connect and{" "}
            <span className="text-neutral-500">
              talk about ideas.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-neutral-400 md:text-base">
            Whether you&apos;d like to discuss technology, opportunities,
            collaboration or simply exchange ideas, feel free to reach out.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=khanasiya2345@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-xs font-medium !text-neutral-900 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            khanasiya2345@gmail.com ↗
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-500 md:flex-row">
          <p>© 2026 Asiya Khan</p>

          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/asiya-khan-791921302"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/khanasiya2345-design"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;