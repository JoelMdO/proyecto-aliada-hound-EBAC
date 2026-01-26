import { type Guia } from "../../types/types";
import api from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGuides } from "./fetch_guideThunk";

export const registerGuide = createAsyncThunk(
  "registerGuide",
  async (newGuide: Guia, thunkAPI) => {
    const response = await api.post("guides/api/crear-guia", newGuide);
    thunkAPI.dispatch(fetchGuides());
    return response.data;
  },
);
