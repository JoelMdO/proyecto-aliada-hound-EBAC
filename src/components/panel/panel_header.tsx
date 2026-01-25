import "../../styles/_section-panel.scss";
import panel from "../../constants/panel_text";

const PanelHeader = () => {
  return (
    <>
      <div className="section-panel__form-container">
        <h2
          id="estado-general-title"
          className="section-panel__form-container-title"
        >
          {panel.title}
        </h2>
      </div>
      <strong className="section-panel__subtitle">
        {panel.subtitlePrefix}
      </strong>
    </>
  );
};
export default PanelHeader;
