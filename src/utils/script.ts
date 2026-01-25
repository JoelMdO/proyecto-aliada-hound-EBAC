import guias from "../data/guias.ts";
import type { AppDispatch } from "../store/store.tsx";
import type { Guia } from "../types/types.js";
import { registerGuideAndSave } from "../redux/thunks/guideThunk.ts";

///--------------------------------------------------------
// SAVE IN LOCAL STORAGE AND RENDER GUIAS
///--------------------------------------------------------
export const fetchGuias = async ({
  guidesFromStore,
  setGuias,
  dispatch,
}: {
  guidesFromStore: Guia[];
  setGuias: (guias: Guia[]) => void;
  dispatch: AppDispatch;
}) => {
  //
  let initialGuias = retrieveGuias();

  //==============================================
  // If localstorage is empty, save guias and render them
  // and update the Store.
  //==============================================
  if (
    !initialGuias ||
    (initialGuias.length === 0 && guidesFromStore.length === 0)
  ) {
    //console.log("loading guides from scratch");

    saveGuias();
    initialGuias = retrieveGuias();
    initialGuias.forEach((guia: Guia) =>
      dispatch(registerGuideAndSave(guia, "initial")),
    );
  }
  //==============================================
  // If there are more guides in the store, update the list to render
  //==============================================
  if (
    guidesFromStore.length > 0 &&
    guidesFromStore.length > initialGuias.length
  ) {
    // console.log("loading guias from store");

    initialGuias = guidesFromStore;
  }
  //==============================================
  // If localstorage has guides, but store not, load from localstorage
  //==============================================
  if (initialGuias && initialGuias.length > 0 && guidesFromStore.length === 0) {
    // console.log("loading guias from localstorage to store");

    initialGuias.forEach((guia: Guia) =>
      dispatch(registerGuideAndSave(guia, "initial")),
    );
  }
  //----------------------------------------------
  // Finally, set the local state to render
  //----------------------------------------------
  setGuias(initialGuias);
};
//
export function saveGuias() {
  // Save initial guias to local storage if not already present
  localStorage.setItem("guiasLocalStorage", JSON.stringify(guias));
}

export function retrieveGuias() {
  // Load guias from local storage
  const guiasData = localStorage.getItem("guiasLocalStorage");
  return guiasData ? JSON.parse(guiasData) : null;
}

export function updateGuiasTable(guia: Guia) {
  console.log("at guias table", guia);

  const guiasFromLocalStorage = retrieveGuias();

  const guiaIndex = guiasFromLocalStorage.findIndex(
    (g: Guia) => g.numeroDeGuia === guia.numeroDeGuia,
  );
  //
  console.log("guia index found", guiaIndex);

  //
  if (guiaIndex !== -1) {
    guiasFromLocalStorage[guiaIndex] = { ...guia };
  } else {
    guiasFromLocalStorage.push(guia);
  }

  console.log("guia before updaing localstorage", guiasFromLocalStorage);

  localStorage.setItem(
    "guiasLocalStorage",
    JSON.stringify(guiasFromLocalStorage),
  );
}
