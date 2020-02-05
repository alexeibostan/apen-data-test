import { SELECT_PACKAGE, FETCH_PACKAGES } from '../actions/package';
const initialState = {
  selectedPack: '',
  packages: []
};

export const packages = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PACKAGE:
      return { ...state, selectedPack: action.payload };
    case FETCH_PACKAGES:
      return { ...state, packages: action.payload };
    default:
      return state;
  }
};
