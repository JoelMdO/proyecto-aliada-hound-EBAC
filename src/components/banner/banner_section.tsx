import "../../styles/_section-banner.scss";
import BannerBoat from "./banner_boat";
import BannerMask from "./banner_mask";

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
          <BannerBoat />
          <BannerMask />
        </div>
      </section>
    </>
  );
};

export default BannerSection;
