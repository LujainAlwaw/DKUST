import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSettings = createAsyncThunk(
  "settings/fetchSettings",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 150));
    return {
      appName: "Week 15 Project Structure",
    };
  }
);

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectSettings = (state) => state.settings.data;
export const selectSettingsLoading = (state) => state.settings.loading;

export default settingsSlice.reducer;
