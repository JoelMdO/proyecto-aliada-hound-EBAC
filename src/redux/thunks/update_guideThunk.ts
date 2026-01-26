import { updateGuideStatus } from "../slices/guide_slice";
import api from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateGuide = createAsyncThunk(
  "updateGuideStatus",
  async (trackingNumber: string, thunkAPI) => {
    //
    const response = await api.post(
      `guides/api/actualizar-guia/${trackingNumber}`,
      { initialStatus: "Entregado" },
    );
    const responseStatus = response.data?.status;
    if (responseStatus !== 200) {
      thunkAPI.dispatch(
        updateGuideStatus({
          trackingNumber: trackingNumber,
          initialStatus: "Entregado",
        }),
      );
    }
  },
);
