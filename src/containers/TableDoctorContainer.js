import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { fetchPaginate, sortDoctors, selectDoctor } from '../actions/doctor';
import TableDoctor from '../components/TableDoctor';
import { resetToolbarButtons } from '../actions/app';

const mapStateToProps = ({ doctors }) => {
  return {
    columns: doctors.activeDoctorFields,
    rows: doctors.doctors,
    totalRows: doctors.totalRows,
    rowsPerPage: doctors.rowsPerPage,
    page: doctors.page,
    orderBy: doctors.orderBy,
    orderDirection: doctors.orderDirection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangePage: page => {
      dispatch(fetchPaginate(page));
    },
    onSortDoctors: (sortType, sortField) => {
      dispatch(sortDoctors(sortType, sortField));
    },
    onRowSelected: row => {
      dispatch(selectDoctor(row));
      dispatch(resetToolbarButtons());
      dispatch(push('/doctor'));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableDoctor);
