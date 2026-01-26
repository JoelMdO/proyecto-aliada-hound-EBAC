import "../../styles/_section-panel.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import panel from "../../constants/panel_text";
import countGuidesStatus from "../../utils/count_guides_status";

const PanelBars = () => {
  //
  const guias = useSelector((state: RootState) => state.guides.guides);
  const { completed, inProgress, pending } = countGuidesStatus(guias);
  //
  return (
    <>
      <div className="section-panel__chart-general">
        <div className="section-panel__bar-1">
          <strong>
            {panel.inProgress_label}
            {inProgress}
          </strong>
        </div>
        <div className="section-panel__bar-2">
          <strong>
            {panel.pending_label}
            {pending}
          </strong>
        </div>
        <div className="section-panel__bar-3">
          <strong>
            {panel.deliverted_label}
            {completed}
          </strong>
        </div>
      </div>
    </>
  );
};
export default PanelBars;
