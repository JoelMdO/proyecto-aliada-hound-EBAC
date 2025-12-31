import "../styles/_section-banner.scss";
const BannerSection = () => {
  return (
    <>
      <section className="section-banner">
        <div className="section-banner__red-line"></div>
        <div className="section-banner__background">
          <div className="section-banner__boat-container">
            <div className="section-banner__boat-text-container">
              <h2 className="section-banner__banner-title">Tú</h2>
              <h2 className="section-banner__banner-subtitle">Servicio</h2>
            </div>
            <div className="section-banner__container-1"></div>
            <div className="section-banner__container-2"></div>
            <div className="section-banner__container-3"></div>
            <div className="section-banner__container-4"></div>
            <div className="section-banner__container-5"></div>
            <div className="section-banner__cockpit-floor"></div>
            <div className="section-banner__cockpit-roof"></div>
          </div>
          <div className="section-banner__mask-container">EXPRESS</div>
        </div>
      </section>{" "}
    </>
  );
};

export default BannerSection;
