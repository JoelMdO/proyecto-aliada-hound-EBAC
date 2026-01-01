import { type AppDispatch, type RootState } from "../store/store";
import { updateGuiasTable } from "../utils/script";
import { type Guia } from "../types/types";
import { registerGuide, updateGuideStatus } from "../slices/guide_slice";

export const registerGuideAndSave =
  (guide: Omit<Guia, "status">, type: string) => (dispatch: AppDispatch) => {
    dispatch(registerGuide(guide));

    const guideWithStatus: Guia = {
      ...guide,
    };

    if (type === "register") {
      updateGuiasTable(guideWithStatus);
    }
  };

export const markGuideAsReceivedAndSave =
  (numeroDeGuia: string) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    //
    //console.log("guia a markGuideAsReceivedAndSave", numeroDeGuia);

    dispatch(
      updateGuideStatus({
        numeroDeGuia: numeroDeGuia,
        estadoInicial: "Entregado",
      })
    );

    //
    const updatedGuide = getState().guides.guides.find(
      (g) => g.numeroDeGuia === numeroDeGuia
    );
    //console.log("upodatedGuide at markGuide after store update", updatedGuide);

    if (!updatedGuide) return;

    const guideWithNewStatus: Guia = {
      ...updatedGuide,
    };
    //
    updateGuiasTable(guideWithNewStatus);
  };
