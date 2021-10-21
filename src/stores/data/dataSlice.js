import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dataAPI from './dataAPI'

const DATA_ACTION_TYPE = {
  getList: 'data/getList',
}

 export const initialState = {
  list: [],
  isLoadingList: false,
  detailsInfo: {},
}

export const getList = createAsyncThunk(
  DATA_ACTION_TYPE.getList,
  async (params, thunkAPI) => {
    const response = await dataAPI.getList();
    return response.data;
  }
);

const dataSlise = createSlice({
  name: 'data',
  initialState,
  reducers: {
    clearList(state) {
      state.list = initialState.list;
    },
    setDetailsInfo(state, action) {
      const { payload } = action;
      state.detailsInfo = state.list.find(el => el.id === payload);
    },
    clearDetailsInfo(state) {
      state.detailsInfo = initialState.detailsInfo;
    },
  },
  extraReducers: {
    [getList.pending]: (state) => {
      state.isLoadingList = true;
    },
    [getList.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoadingList = false;
    },
  },
});

export const { clearList, setDetailsInfo, clearDetailsInfo } = dataSlise.actions;

export default dataSlise.reducer;
