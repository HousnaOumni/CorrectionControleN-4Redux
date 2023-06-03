import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("Users/fetchData", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  res.data;
  return res.data;
});
const initialState = {
  data: [],
  loading: false,
  error: null,
};
const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fullfield]: (state, action) => {
      (state.data = action.payload),
        (state.loading = false),
        (state.error = null);
    },
    [fetchUsers.rejected]: (state, action) => {
      (state.error = action.error), (state.loading = false);
    },
  },
});

export default UsersSlice.reducer;
