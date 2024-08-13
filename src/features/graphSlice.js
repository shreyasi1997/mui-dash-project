import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  monthlyUserData: [
    { name: 'Jan', ActiveUsers: 40, PremiumUsers: 80, NewUsers: 30 },
    { name: 'Feb', ActiveUsers: 50, PremiumUsers: 70, NewUsers: 40 },
    { name: 'Mar', ActiveUsers: 60, PremiumUsers: 100, NewUsers: 50 },
    { name: 'Apr', ActiveUsers: 55, PremiumUsers: 90, NewUsers: 35 },
    { name: 'May', ActiveUsers: 70, PremiumUsers: 95, NewUsers: 60 },
    { name: 'Jun', ActiveUsers: 60, PremiumUsers: 85, NewUsers: 55 },
    { name: 'Jul', ActiveUsers: 80, PremiumUsers: 110, NewUsers: 75 },
    { name: 'Aug', ActiveUsers: 65, PremiumUsers: 105, NewUsers: 50 },
    { name: 'Sep', ActiveUsers: 70, PremiumUsers: 95, NewUsers: 60 },
    { name: 'Oct', ActiveUsers: 75, PremiumUsers: 85, NewUsers: 65 },
  ],
};

const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    setMonthlyUserData: (state, action) => {
      state.monthlyUserData = action.payload;
    },
    addMonthlyUserData: (state, action) => {
      state.monthlyUserData.push(action.payload);
    },
    removeMonthlyUserData: (state, action) => {
      state.monthlyUserData = state.monthlyUserData.filter((data) => data.name !== action.payload);
    },
    updateMonthlyUserData: (state, action) => {
      const { name, newData } = action.payload;
      const index = state.monthlyUserData.findIndex((data) => data.name === name);
      if (index !== -1) {
        state.monthlyUserData[index] = { ...state.monthlyUserData[index], ...newData };
      }
    },
  },
});

export const { setMonthlyUserData, addMonthlyUserData, removeMonthlyUserData, updateMonthlyUserData } = graphSlice.actions;
export default graphSlice.reducer;
