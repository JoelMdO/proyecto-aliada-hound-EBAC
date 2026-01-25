import "../../styles/_section-banner.scss";
import { banner } from "../../constants/banner_text";

const BannerBoat = () => {
  return (
    <>
      <div className="section-banner__boat-container" aria-hidden="true">
        <div className="section-banner__boat-text-container">
          <h2 className="section-banner__banner-title">{banner.title1}</h2>
          <h2 className="section-banner__banner-subtitle">{banner.title2}</h2>
        </div>
        <div className="section-banner__container-1" aria-hidden="true"></div>
        <div className="section-banner__container-2" aria-hidden="true"></div>
        <div className="section-banner__container-3" aria-hidden="true"></div>
        <div className="section-banner__container-4" aria-hidden="true"></div>
        <div className="section-banner__container-5" aria-hidden="true"></div>
        <div className="section-banner__cockpit-floor" aria-hidden="true"></div>
        <div className="section-banner__cockpit-roof" aria-hidden="true"></div>
      </div>
    </>
  );
};

export default BannerBoat;
