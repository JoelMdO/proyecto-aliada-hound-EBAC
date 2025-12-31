import "../styles/_section-panel.scss";
const PanelSection = () => {
  return (
    <>
      <section className="section-panel" id="estado-general">
        <div className="section-panel__form-container">
          <h2 className="section-panel__form-container-title">
            Estado General
          </h2>
        </div>
        <strong className="section-panel__subtitle">Numero total de</strong>
        <div className="section-panel__container">
          <div className="section-panel__boat-container">
            <h2 className="section-panel__subtitle-guias">Guias</h2>
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
            <strong>Entregadas 35%</strong>
          </div>
          <div className="section-panel__bar-2">
            <strong>En ruta 65%</strong>
          </div>
        </div>
      </section>
    </>
  );
};
export default PanelSection;
