import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Shreyasi',
  email: 'shreyasichatterg@gmail.com',
  avatarInitial: 'S',
  users: [], 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatarInitial = action.payload.avatarInitial;
    },
    setUsers: (state, action) => {
      state.users = action.payload; // Set users array in state
    },
  },
});

export const { setUser, setUsers } = userSlice.actions; 
export default userSlice.reducer;
