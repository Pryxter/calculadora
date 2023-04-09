export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="grid">
          <div className="logoNavbarContainer">
            <img
              src="/Icons/Dollar.svg"
              alt="Logo"
              className="logoNavbar"
              style={{ cursor: "pointer" }}
            />
          </div>
          <ul className="listNavbar">
            <li>INICIO</li>
            <li>HISTORIAL</li>
          </ul>
        </div>
      </div>
    </>
  );
};
