import {
  FETCH_PAGINATE_ERROR,
  FETCH_PAGINATE_SUCCESS,
  SET_REQUEST_FILTER,
  SORT_DOCTORS,
  SELECT_DOCTOR,
  ACTIVATE_FIELD,
  DEACTIVATE_FIELD
} from '../actions/doctor';
const initialState = {
  doctors: [],
  doctorFields: [],
  activeDoctorFields: [],
  selectedDoctor: null,
  totalRows: 0,
  error: null,
  rowsPerPage: 10,
  page: 0,
  startsWith: '',
  filterField: '',
  orderBy: '',
  orderDirection: 'asc' // asc/desc
};

export const doctors = (state = initialState, action) => {
  switch (action.type) {
    case SET_REQUEST_FILTER:
      const { startsWith, filterField } = action.payload;
      return { ...state, startsWith, filterField };
    case FETCH_PAGINATE_SUCCESS:
      let doctorFields = state.doctorFields;
      let activeDoctorFields = state.activeDoctorFields;
      if (action.payload.doctors.length > 0) {
        const doctor = action.payload.doctors[0];
        doctorFields = Object.keys(doctor).filter(
          key => typeof doctor[key] !== 'object' || doctor[key] === null
        );
        activeDoctorFields = doctorFields.slice(0, 5);
      } else {
        activeDoctorFields = [];
      }
      return {
        ...state,
        doctors: action.payload.doctors,
        doctorFields,
        activeDoctorFields,
        totalRows: action.payload.totalRows,
        page: action.payload.page
      };
    case FETCH_PAGINATE_ERROR:
      return { ...state, error: action.payload.error };
    case SORT_DOCTORS:
      if (action.payload.sortType === 'asc') {
        return {
          ...state,
          orderBy: action.payload.sortField,
          orderDirection: 'asc',
          doctors: state.doctors
            .sort((a, b) => sortAsc(a, b, action.payload.sortField))
            .slice()
        };
      } else {
        return {
          ...state,
          orderBy: action.payload.sortField,
          orderDirection: 'desc',
          doctors: state.doctors
            .sort((a, b) => sortDesc(a, b, action.payload.sortField))
            .slice()
        };
      }
    case SELECT_DOCTOR:
      return { ...state, selectedDoctor: action.payload };
    case ACTIVATE_FIELD:
      return {
        ...state,
        activeDoctorFields: [...state.activeDoctorFields, action.payload]
      };
    case DEACTIVATE_FIELD:
      return {
        ...state,
        activeDoctorFields: state.activeDoctorFields.filter(
          field => field !== action.payload
        )
      };
    default:
      return state;
  }
};

const sortAsc = (a, b, field) => {
  //Sort string and numbers
  if (a[field] > b[field]) {
    return 1;
  }
  if (b[field] > a[field]) {
    return -1;
  }
  return 0;
};

const sortDesc = (a, b, field) => {
  //Sort string and numbers
  if (a[field] > b[field]) {
    return -1;
  }
  if (b[field] > a[field]) {
    return 1;
  }
  return 0;
};
