/* eslint-disable react/button-has-type */
export const HamburgerButton = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) => {
  // Create horizontal lines
  const renderLine = (style: string) => (
    <hr
      aria-hidden="true"
      className={`absolute block h-0.5 w-5 bg-current transition duration-500 ease-in-out${style}`}
    />
  );

  return (
    <button
      className="relative size-10 scale-150 text-secondary-content focus:outline-secondary md:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-expanded={menuOpen}
    >
      <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
      <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2">
        {renderLine(menuOpen ? 'rotate-45' : '-translate-y-1.5')}
        {renderLine(menuOpen ? 'opacity-0' : '')}
        {renderLine(menuOpen ? '-rotate-45' : 'translate-y-1.5')}
      </div>
    </button>
  );
};
