import { getDoctors, processError } from '../api/OpenData';
import { startLoader, stopLoader, showSnackbar } from '../actions/app';

export const SET_REQUEST_FILTER = 'SET_REQUEST_FILTER';
export const FETCH_PAGINATE_SUCCESS = 'FETCH_PAGINATE_SUCCESS';
export const FETCH_PAGINATE_ERROR = 'FETCH_PAGINATE_ERROR';
export const SORT_DOCTORS = 'SORT_DOCTORS';
export const FILTER_PAGINATE = 'FILTER_PAGINATE';
export const SELECT_DOCTOR = 'SELECT_DOCTOR';
export const SERVER_ERROR = 'SERVER_ERROR';
export const ACTIVATE_FIELD = 'ACTIVATE_FIELD';
export const DEACTIVATE_FIELD = 'DEACTIVATE_FIELD';

export const fetchPaginate = page => {
  return (dispatch, getState) => {
    dispatch(startLoader());
    const {
      packages: { selectedPack },
      doctors: { rowsPerPage, startsWith, filterField }
    } = getState();
    return getDoctors(
      selectedPack,
      rowsPerPage,
      rowsPerPage * page,
      null,
      startsWith,
      filterField
    )
      .then(({ data }) => {
        dispatch(stopLoader());
        dispatch(fetchPaginateSuccess({ page, data }));
      })
      .catch(error => {
        dispatch(stopLoader());
        const messagge = processError(error);
        dispatch(showSnackbar('error', messagge));
      });
  };
};

export const setRequestFilter = (startsWith, filterField) => {
  return {
    type: SET_REQUEST_FILTER,
    payload: { startsWith, filterField }
  };
};

export const fetchPaginateSuccess = ({ page, data }) => {
  return {
    type: FETCH_PAGINATE_SUCCESS,
    payload: {
      doctors: data.d.results,
      totalRows: parseInt(data.d.__count, 10), // count is a string in this API
      page
    }
  };
};

export const fetchPaginateError = error => {
  return {
    type: FETCH_PAGINATE_ERROR,
    payload: {
      error
    }
  };
};

export const sortDoctors = (sortType, sortField) => {
  return {
    type: SORT_DOCTORS,
    payload: { sortType, sortField }
  };
};

export const selectDoctor = doctor => {
  return {
    type: SELECT_DOCTOR,
    payload: doctor
  };
};

export const addActiveField = field => {
  return {
    type: ACTIVATE_FIELD,
    payload: field
  };
};

export const removeActiveField = field => {
  return {
    type: DEACTIVATE_FIELD,
    payload: field
  };
};
