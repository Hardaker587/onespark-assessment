import { createSlice, configureStore } from "@reduxjs/toolkit";

const beneficiariesSlice = createSlice({
  name: "beneficiaries",
  initialState: {
    beneficiaries: [] as any,
  },
  reducers: {
    add: function (state, beneficiary: any) {
      if (state.beneficiaries.length < 5) state.beneficiaries.push(beneficiary);
    },
    remove: function (state, beneficiaryId: string): void {
      state.beneficiaries = state.beneficiaries.filter((beneficiary: any) => {
        return beneficiary.id !== beneficiaryId;
      });
    },
  },
});

export const { add, remove } = beneficiariesSlice.actions;

export const beneficiaryStore = configureStore({
  reducer: beneficiariesSlice.reducer,
});
