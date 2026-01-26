import api from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadGuides } from "../slices/guide_slice";

export const fetchGuides = createAsyncThunk(
  "fetchGuides",
  async (_, thunkAPI) => {
    // const dispatch = useDispatch<AppDispatch>();
    const response = await api.get("guides/api/obtener-todas-las-guias/");
    console.log("response at fetchGuide", response);
    const responseStatus = response.status;
    console.log("responseStatus", responseStatus);

    if (responseStatus === 200) {
      thunkAPI.dispatch(loadGuides(response.data));
    }
    return responseStatus;
  },
);
