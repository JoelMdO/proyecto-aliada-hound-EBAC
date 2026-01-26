import api from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadGuides } from "../slices/guide_slice";

export const fetchGuides = createAsyncThunk(
  "fetchGuides",
  async (_, thunkAPI) => {
    const response = await api.get("guides/api/obtener-todas-las-guias/");
    const responseStatus = response.status;

    if (responseStatus === 200) {
      thunkAPI.dispatch(loadGuides(response.data));
    }
    return responseStatus;
  },
);
