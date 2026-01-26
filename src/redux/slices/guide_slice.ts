import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Guia } from "../../types/types";
import { registerGuide } from "../thunks/register_guideThunk";
import { fetchGuides } from "../thunks/fetch_guideThunk";
import { updateGuide } from "../thunks/update_guideThunk";

interface GuideState {
  guides: Guia[];
  status: "loading" | "succeeded" | "failed";
  error?: string;
}

const initialState: GuideState = {
  guides: [],
  status: "loading",
  error: undefined,
};

// Create a slice for guides
export const guideSlice = createSlice({
  name: "guides",
  initialState,
  reducers: {
    loadGuides: (state, action: PayloadAction<Guia[]>) => {
      state.guides = action.payload;
    },
    updateGuideStatus: (
      state,
      action: PayloadAction<{
        trackingNumber: string;
        initialStatus: string;
      }>,
    ) => {
      const guide = state.guides.find(
        (g) => g.trackingNumber === action.payload.trackingNumber,
      );
      //
      if (guide) {
        //
        guide.initialStatus = action.payload.initialStatus;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerGuide.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(registerGuide.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerGuide.rejected, (state) => {
        state.status = "failed";
        state.error = "Failed to register guide";
      })
      .addCase(fetchGuides.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(fetchGuides.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGuides.rejected, (state) => {
        state.status = "failed";
        state.error = "Failed to fetch guides";
      })
      .addCase(updateGuide.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(updateGuide.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateGuide.rejected, (state) => {
        state.status = "failed";
        state.error = "Failed to update guide status";
      });
  },
});

// Export actions
export const { loadGuides, updateGuideStatus } = guideSlice.actions;
