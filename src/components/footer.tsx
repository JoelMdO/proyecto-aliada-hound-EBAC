import "../styles/_footer.scss";
import { footer } from "../constants/footer_text";

const Footer = () => {
  return (
    <>
      <footer role="contentinfo" aria-label="Site footer">
        <p>{footer.copyright}</p>
        <p>{footer.reserved}</p>
      </footer>
    </>
  );
};
export default Footer;
