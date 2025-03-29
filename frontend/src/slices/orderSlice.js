import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const placeOrder = createAsyncThunk("order/placeOrder", async (orderData, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.post("http://localhost:5000/api/orders", orderData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const orderSlice = createSlice({
  name: "order",
  initialState: { orders: [], status: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => { state.status = "loading"; })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.orders.push(action.payload);
        state.status = "success";
      })
      .addCase(placeOrder.rejected, (state) => { state.status = "failed"; });
  }
});

export default orderSlice.reducer;
