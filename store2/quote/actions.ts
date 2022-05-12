import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getKanyeQuote = createAsyncThunk("kanye/kanyeQuote", async () => {
  const response = await axios.get("https://api.kanye.rest/");

  return response.data;
});

export const setValue = createAction<string>("kanye/setValue");
