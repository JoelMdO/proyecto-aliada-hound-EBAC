import "../styles/_section-banner.scss";
const BannerSection = () => {
  return (
    <>
      <section
        className="section-banner"
        role="region"
        aria-label="Hero banner"
      >
        <div className="section-banner__red-line" aria-hidden="true"></div>
        <div className="section-banner__background">
          <div className="section-banner__boat-container" aria-hidden="true">
            <div className="section-banner__boat-text-container">
              <h2 className="section-banner__banner-title">Tú</h2>
              <h2 className="section-banner__banner-subtitle">Servicio</h2>
            </div>
            <div
              className="section-banner__container-1"
              aria-hidden="true"
            ></div>
            <div
              className="section-banner__container-2"
              aria-hidden="true"
            ></div>
            <div
              className="section-banner__container-3"
              aria-hidden="true"
            ></div>
            <div
              className="section-banner__container-4"
              aria-hidden="true"
            ></div>
            <div
              className="section-banner__container-5"
              aria-hidden="true"
            ></div>
            <div
              className="section-banner__cockpit-floor"
              aria-hidden="true"
            ></div>
            <div
              className="section-banner__cockpit-roof"
              aria-hidden="true"
            ></div>
          </div>
          <div className="section-banner__mask-container" aria-hidden="true">
            EXPRESS
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSection;
