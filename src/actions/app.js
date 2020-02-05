export const CHANGE_VIEW = 'CHANGE_VIEW';
export const CHANGE_TOOLBAR_TITLE = 'CHANGE_TOOLBAR_TITLE';
export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';
export const START_LOADER = 'START_LOADER';
export const STOP_LOADER = 'STOP_LOADER';
export const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
export const HIDE_SNACKBAR = 'HIDE_SNACKBAR';
export const SET_TOOLBAR_BUTTONS = 'SET_TOOLBAR_BUTTONS';
export const RESET_TOOLBAR_BUTTONS = 'RESET_TOOLBAR_BUTTONS';

export const changeView = newView => {
  return {
    type: CHANGE_VIEW,
    payload: newView
  };
};

export const changeToolbarTitle = title => {
  return {
    type: CHANGE_TOOLBAR_TITLE,
    payload: title
  };
};

export const setToolbarButtons = buttons => {
  return {
    type: SET_TOOLBAR_BUTTONS,
    payload: buttons
  };
};

export const resetToolbarButtons = () => {
  return {
    type: RESET_TOOLBAR_BUTTONS
  };
};

export const openDialog = () => {
  return {
    type: OPEN_DIALOG
  };
};

export const closeDialog = () => {
  return {
    type: CLOSE_DIALOG
  };
};

export const startLoader = () => {
  return {
    type: START_LOADER
  };
};

export const stopLoader = () => {
  return {
    type: STOP_LOADER
  };
};

export const showSnackbar = (severity, message) => {
  return {
    type: SHOW_SNACKBAR,
    payload: { severity, message }
  };
};

export const hideSnackbar = () => {
  return {
    type: HIDE_SNACKBAR
  };
};
