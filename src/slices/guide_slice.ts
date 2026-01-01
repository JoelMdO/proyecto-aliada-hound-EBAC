import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Guia } from "../types/types";

interface GuideState {
  guides: Guia[];
}

const initialState: GuideState = {
  guides: [],
};

// Create a slice for guides
export const guideSlice = createSlice({
  name: "guides",
  initialState,
  reducers: {
    registerGuide: (state, action: PayloadAction<Guia>) => {
      state.guides.push({ ...action.payload });
    },
    updateGuideStatus: (
      state,
      action: PayloadAction<{
        numeroDeGuia: string;
        estadoInicial: string;
      }>
    ) => {
      //console.log("action at updateGuideStatus", action, "state", state);

      // console.log(
      //   "action at updateGuideStatus more",
      //   action.payload.estadoInicial,
      //   action.payload.numeroDeGuia,
      //   "type of estadoInicial",
      //   typeof action.payload.estadoInicial
      // );

      //console.log("state guides", state.guides.length);

      const guide = state.guides.find(
        (g) => g.numeroDeGuia === action.payload.numeroDeGuia
      );
      //console.log("does the guide was found at updateGuideStatus", guide);
      //
      if (guide) {
        //console.log("yes it was found and updated", guide);
        guide.estadoInicial = action.payload.estadoInicial;
      }
    },
  },
});

// Export actions
export const { registerGuide, updateGuideStatus } = guideSlice.actions;
