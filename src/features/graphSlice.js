
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
  },
});

export const { setMonthlyUserData } = graphSlice.actions;
export default graphSlice.reducer;
