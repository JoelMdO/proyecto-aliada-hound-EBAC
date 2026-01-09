import "../styles/_header.scss";

const Header = () => {
  return (
    <>
      <header role="banner" aria-label="Top banner">
        <div className="header-logo__container">
          <img
            src="/assets/logo-Hound_Express-bg-white.png"
            alt="Hound Express logo"
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
            aria-label="Select language"
          >
            <option value="">Language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
        <nav
          className="header-nav-container"
          role="navigation"
          aria-label="Main navigation"
        >
          <a href="" aria-current="page">
            Inicio
          </a>
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
