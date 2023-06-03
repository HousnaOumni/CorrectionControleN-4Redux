import * as types from "../action/employeType";

const initialState = {
  employe: [
    { Id: 1, Nom: "ALAMI", Prenom: "Sara", Age: 34 },
    { Id: 2, Nom: "DALI", Prenom: "Ahmed", Age: 26 },
  ],
  Search:"",
};

const employeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_EMPLOYE:
      return { ...state, employe: [...state.employe, action.payload] };
    case types.UPDATE_EMPLOYE:
      return {
        ...state,
        employe: state.employe.map((e) => {
          if (e.Id === action.Id) return action.payload;
          return e;
        }),
      };
    case types.REMOVE_EMPLOYE:
      return {
        ...state ,
        employe: state.employe.filter((e) => e.Id !== action.payload),
      };
    case types.SEARCH_EMPLOYE:
      return {
        ...state,
        Search: state.employe.find((el) => el.Id === action.Id),
      };

    default:
      return state;
  }
};

export default employeReducer;
