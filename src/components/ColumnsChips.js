import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Chip, Avatar } from '@material-ui/core';

import { addActiveField, removeActiveField } from '../actions/doctor';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

const ColumnsChips = ({
  activeColumns,
  totalColumns,
  activateColumn,
  deactivateColumn
}) => {
  const classes = useStyles();
  const isActiveColumn = column => activeColumns.find(item => item === column);
  const handleChipClick = column => {
    if (isActiveColumn(column)) {
      deactivateColumn(column);
    } else {
      activateColumn(column);
    }
  };
  return (
    <Paper className={classes.root}>
      {totalColumns.map(column => (
        <Chip
          key={column}
          className={classes.chip}
          size='small'
          color={isActiveColumn(column) ? 'primary' : 'default'}
          avatar={<Avatar>C</Avatar>}
          label={column.replace(/_/g, ' ')}
          onClick={() => handleChipClick(column)}
        />
      ))}
    </Paper>
  );
};

ColumnsChips.propTypes = {
  activeColumns: PropTypes.array.isRequired,
  totalColumns: PropTypes.array.isRequired,
  activateColumn: PropTypes.func.isRequired,
  deactivateColumn: PropTypes.func.isRequired
};

const mapStateToProps = ({ doctors }) => {
  return {
    activeColumns: doctors.activeDoctorFields,
    totalColumns: doctors.doctorFields
  };
};

const mapDispatchToProps = dispatch => {
  return {
    activateColumn: field => {
      dispatch(addActiveField(field));
    },
    deactivateColumn: field => {
      dispatch(removeActiveField(field));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsChips);
