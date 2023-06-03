import { createSlice } from "@reduxjs/toolkit";
import Employe from "../component/Employe";

const EmployeSlice = createSlice({
  name: "employes",
  initialState: {
    employe: [{}],
  },
  reducers: {
    add: (state, action) => state.employe.push(action.payload),
    search: (state, action) =>
      (state.employe = state.employe.find((e) => e.id === action.payload)),
    del: (state, action) =>
      (state.employe = state.employe.filter((e) => e.id !== action.payload)),
    edit: (state, action) => {
      const Employe = state.employe.find((e) => e.id === action.id);
      Employe.Nom = action.payload.Nom;
      Employe.Prenom = action.payload.Prenom;
      Employe.Age = action.payload.Age;
      return { ...state, Employe };
    },
  },
});

export const { add, serach, del, edit } = Employe.action;
export default EmployeSlice.reducer;
