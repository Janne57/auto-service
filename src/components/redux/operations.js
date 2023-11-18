import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


axios.defaults.baseURL =
  'https://65567bc984b36e3a431fd1ec.mockapi.io/api/v1/';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
        const response = await axios.get('/Advert');
        console.log('response', response)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }  
  }
);