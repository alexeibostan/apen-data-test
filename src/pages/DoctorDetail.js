import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DetailViewer from '../components/DetailViewer';

class DoctorDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const doctor = this.props.selectedDoctor;
    return (
      <div>
        <DetailViewer item={doctor} />
      </div>
    );
  }
}

DoctorDetail.propTypes = {
  selectedDoctor: PropTypes.object.isRequired
};

const mapStateToProps = ({ doctors }) => {
  return {
    selectedDoctor: doctors.selectedDoctor
  };
};

export default connect(mapStateToProps)(DoctorDetail);
