import "../styles/styles.css";
import { header as headerText } from "../constants/header_text";

const Header = () => {
  return (
    <>
      <header role="banner" aria-label="Top banner">
        <div className="header-logo__container">
          <img
            src="./assets/logo-Hound_Express-bg-white.png"
            alt={headerText.logoAlt}
            width="180"
            height="80"
            className="header-logo"
          />
          <div className="header-phone-1">
            <strong>{headerText.contacts.usaLabel}</strong>
            <p>{headerText.contacts.usaNumber}</p>
          </div>
          <div className="header-phone-2">
            <strong>{headerText.contacts.mxLabel}</strong>
            <p>{headerText.contacts.mxNumber}</p>
          </div>
          <select
            className="header-select"
            name="language"
            id="language"
            title={headerText.language.title}
            aria-label={headerText.language.ariaLabel}
          >
            <option value="">{headerText.language.default}</option>
            {headerText.language.options.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <nav
          className="header-nav-container"
          role="navigation"
          aria-label="Main navigation"
        >
          {headerText.navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              {...(idx === 0 ? { "aria-current": "page" } : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
