import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

const beneficiariesSlice = createSlice({
  name: "beneficiaries",
  initialState: {
    beneficiaries: [] as any,
  },
  reducers: {
    add: function (state, payload: PayloadAction<any>) {
      if (state.beneficiaries.length < 5) state.beneficiaries.push(payload.payload);
    },
    remove: function (state, beneficiaryId: PayloadAction<string>) {
      state.beneficiaries = state.beneficiaries.filter((beneficiary: any) => {
        return beneficiary.id !== beneficiaryId;
      });
    },
    clear: function (state) {
      state.beneficiaries = [];
    },
  },
});

export const { add, remove, clear } = beneficiariesSlice.actions;

export const beneficiaryStore = configureStore({
  reducer: beneficiariesSlice.reducer,
});

export type RootState = ReturnType<typeof beneficiaryStore.getState>;
export type AppDispatch = ReturnType<typeof beneficiaryStore.dispatch>;
