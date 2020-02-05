import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const FilterForm = ({
  itemFields,
  searchField,
  searchString,
  onFormChanges
}) => {
  const classes = useStyles();

  const selectItems = itemFields.map(field => ({
    label: field.replace(/_/g, ' '),
    value: field
  }));

  const [field, setField] = useState(searchField);
  const [str, setStr] = useState(searchString);

  return (
    <form
      className={classes.root}
      onChange={event => onFormChanges(event)}
      noValidate
      autoComplete='off'
    >
      <Grid container direction='row' justify='center' alignItems='center'>
        <TextField
          id='searchField'
          name='searchField'
          select
          label='Campo'
          variant='filled'
          value={field}
          onChange={event => setField(event.target.value)}
          SelectProps={{
            native: true
          }}
        >
          {selectItems.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id='searchString'
          name='searchString'
          label='Valore'
          variant='filled'
          value={str}
          onChange={event => setStr(event.target.value)}
        />
      </Grid>
    </form>
  );
};

FilterForm.propTypes = {
  itemFields: PropTypes.array.isRequired,
  searchField: PropTypes.string.isRequired,
  searchString: PropTypes.string.isRequired,
  onFormChanges: PropTypes.func.isRequired
};

export default FilterForm;
