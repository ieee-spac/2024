export const HamburgerButton = ({ menuOpen, setMenuOpen }:{menuOpen:boolean,setMenuOpen:(open:boolean)=> void}) => {
  // Create horizontal lines
  const renderLine = (style:string) => (
    <hr
      aria-hidden="true"
      className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${style}`}
    />
  );

  return (
    <button
      className="text-secondary-content w-10 h-10 relative focus:outline-secondary scale-150 md:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-expanded={menuOpen}
    >
      <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
      <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {renderLine(menuOpen ? "rotate-45" : "-translate-y-1.5")}
        {renderLine(menuOpen ? "opacity-0" : "")}
        {renderLine(menuOpen ? "-rotate-45" : "translate-y-1.5")}
      </div>
    </button>
  );
};

