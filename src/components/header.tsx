import "../styles/_header.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-logo__container">
          <img
            src="assets/logo-Hound_Express-bg-white.png"
            alt="logo-Hound_Express-bg-white"
            width="180"
            height="80"
            className="header-logo"
          />
          <div className="header-phone-1">
            <strong>USA</strong>
            <p>1-800-123-456</p>
          </div>
          <div className="header-phone-2">
            <strong>MX</strong>
            <p>00-5255-12-456</p>
          </div>
          <select
            className="header-select"
            name="language"
            id="language"
            title="Language"
          >
            <option value="">Language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
        <nav className="header-nav-container">
          <a href="">Inicio</a>
          <a href="#registro-de-guias">Registro de Guías</a>
          <a href="#estado-general">Estado General</a>
          <a href="#lista-de-guias">Lista de Guías</a>
          <a href="#buscar-guias">Buscar Guías </a>
          <a href="#historial-de-guias">Historial de Guías</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
