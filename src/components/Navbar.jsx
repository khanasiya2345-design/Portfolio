const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-neutral-200/70 px-6 py-6 md:px-10 lg:px-14">
      {/* Name */}
      <a
        href="#home"
        className="text-sm font-medium tracking-tight text-neutral-800"
      >
        Asiya Khan
      </a>

      {/* Navigation */}
      <div className="flex items-center gap-5 text-xs text-neutral-500 md:gap-7">
        <a
          href="#about"
          className="transition-colors duration-200 hover:text-neutral-900"
        >
          about
        </a>

        <a
          href="#projects"
          className="transition-colors duration-200 hover:text-neutral-900"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="transition-colors duration-200 hover:text-neutral-900"
        >
          Contact
        </a>

        <span className="hidden text-neutral-300 sm:inline">/</span>

        <a
          href="https://www.linkedin.com/in/asiya-khan-791921302"
          target="_blank"
          rel="noreferrer"
          className="hidden transition-colors duration-200 hover:text-neutral-900 sm:inline"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/khanasiya2345-design"
          target="_blank"
          rel="noreferrer"
          className="hidden transition-colors duration-200 hover:text-neutral-900 sm:inline"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Navbar;