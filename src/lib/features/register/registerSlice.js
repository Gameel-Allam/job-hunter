import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  step1: null,
  step2: null,
  step3: null,
  step4: null,
  userData: {},
};

export const RegisterSlice = createSlice({
  name: "register",
  initialState: intialState,
  reducers: {
    setStep1: (state, action) => {
      state.step1 = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    setStep2: (state, action) => {
      state.step2 = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    setStep3: (state, action) => {
      state.step3 = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    setStep4: (state, action) => {
      state.step4 = true;
      state.userData = { ...state.userData, ...action.payload };
    },
  },
});

export const { setStep1, setStep2, setStep3, setStep4 } = RegisterSlice.actions;
export default RegisterSlice.reducer;