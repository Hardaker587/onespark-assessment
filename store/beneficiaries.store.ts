import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { StorageService } from "../services/storage.service";

const storage = new StorageService();

const baseState = storage.getStorage("beneficiaries") || ([] as any);

const beneficiariesSlice = createSlice({
  name: "beneficiaries",
  initialState: {
    beneficiaries: baseState,
  },
  reducers: {
    add: function (state, payload: PayloadAction<any>) {
      if (state.beneficiaries.length < 5) {
        state.beneficiaries.push(payload.payload);
        storage.setStorage("beneficiaries", state.beneficiaries);
      }
    },
    remove: function (state, payload: PayloadAction<any>) {
      state.beneficiaries = state.beneficiaries.filter((beneficiary: any) => {
        return beneficiary.id !== payload.payload.beneficiaryId;
      });
      storage.setStorage("beneficiaries", state.beneficiaries);
    },
    update: function (state, payload: PayloadAction<any>) {
      console.log(payload.payload);
      state.beneficiaries = state.beneficiaries.filter((beneficiary: any) => {
        return beneficiary.id !== payload.payload.id;
      });
      state.beneficiaries.push(payload.payload);
      storage.setStorage("beneficiaries", state.beneficiaries);
    },
    clear: function (state) {
      state.beneficiaries = [];
      storage.setStorage("beneficiaries", state.beneficiaries);
    },
  },
});

export const { add, remove, clear, update } = beneficiariesSlice.actions;

export const beneficiaryStore = configureStore({
  reducer: beneficiariesSlice.reducer,
});

export type RootState = ReturnType<typeof beneficiaryStore.getState>;
export type AppDispatch = ReturnType<typeof beneficiaryStore.dispatch>;
