import "../../styles/_section-banner.scss";
import { banner } from "../../constants/banner_text";

const BannerMask = () => {
  return (
    <>
      <div className="section-banner__mask-container" aria-hidden="true">
        {banner.maskText}
      </div>
    </>
  );
};

export default BannerMask;
