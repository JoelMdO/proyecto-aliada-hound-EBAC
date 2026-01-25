import "../../styles/_section-panel.scss";
import PanelHeader from "./panel_header";
import PanelBoat from "./panel_boat";

const PanelSection = () => {
  return (
    <>
      <section
        className="section-panel"
        id="estado-general"
        role="region"
        aria-labelledby="estado-general-title"
      >
        <PanelHeader />
        <PanelBoat />
      </section>
    </>
  );
};
export default PanelSection;
