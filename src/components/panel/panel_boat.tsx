import "../../styles/_section-panel.scss";
import panel from "../../constants/panel_text";

const PanelBoat = () => {
  return (
    <>
      <div className="section-panel__container">
        <div className="section-panel__boat-container">
          <h2 className="section-panel__subtitle-guias">{panel.guiasTitle}</h2>
          <div className="section-panel__container-1"></div>
          <div className="section-panel__container-2"></div>
          <div className="section-panel__container-3"></div>
          <div className="section-panel__container-4"></div>
          <div className="section-panel__container-5"></div>
          <div className="section-panel__cockpit-floor"></div>
          <div className="section-panel__cockpit-roof"></div>
        </div>
      </div>
      <div className="section-panel__chart-general">
        <div className="section-panel__bar-1">
          <strong>{panel.bar1}</strong>
        </div>
        <div className="section-panel__bar-2">
          <strong>{panel.bar2}</strong>
        </div>
      </div>
    </>
  );
};
export default PanelBoat;
