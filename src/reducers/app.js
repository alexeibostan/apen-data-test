import {
  CHANGE_VIEW,
  CHANGE_TOOLBAR_TITLE,
  OPEN_DIALOG,
  CLOSE_DIALOG,
  START_LOADER,
  STOP_LOADER,
  SHOW_SNACKBAR,
  HIDE_SNACKBAR,
  SET_TOOLBAR_BUTTONS,
  RESET_TOOLBAR_BUTTONS
} from '../actions/app';
const initialState = {
  view: 'LIST',
  titleBar: 'Open Data Piemonte',
  buttonsBar: [],
  isDialogOpen: false,
  isAppLoading: false,
  snackBar: {
    isOpen: false,
    message: '',
    severity: ''
  },
  map: {
    lat: 45.07049,
    lng: 7.68682,
    zoom: 10
  }
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SNACKBAR:
      const { severity, message } = action.payload;
      return { ...state, snackBar: { isOpen: true, severity, message } };
    case HIDE_SNACKBAR:
      return {
        ...state,
        snackBar: { isOpen: false, severity: '', message: '' }
      };
    case START_LOADER:
      return { ...state, isAppLoading: true };
    case STOP_LOADER:
      return { ...state, isAppLoading: false };
    case OPEN_DIALOG:
      return { ...state, isDialogOpen: true };
    case CLOSE_DIALOG:
      return { ...state, isDialogOpen: false };
    case CHANGE_VIEW:
      return { ...state, view: action.payload };
    case CHANGE_TOOLBAR_TITLE:
      return { ...state, titleBar: action.payload };
    case SET_TOOLBAR_BUTTONS:
      return { ...state, buttonsBar: action.payload };
    case RESET_TOOLBAR_BUTTONS:
      return { ...state, buttonsBar: [] };
    default:
      return state;
  }
};
