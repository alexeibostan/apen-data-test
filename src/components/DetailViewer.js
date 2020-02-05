import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const DetailViewer = ({ item }) => {
  const classes = useStyles();
  const itemKeys = Object.keys(item).filter(
    key => typeof item[key] !== 'object'
  );
  return (
    <div className='detail-viewer'>
      {itemKeys.map(key => (
        <div key={key} className='detail-viewer-item'>
          <label>{key.replace(/_/g, ' ')}</label>
          <p>{item[key]}</p>
        </div>
      ))}
    </div>
  );
};

DetailViewer.propTypes = {
  item: PropTypes.object.isRequired
};

export default DetailViewer;

{
  /* 
        
             <TextField
          InputProps={{
            readOnly: true
          }}
          id={key}
          label={key.replace(/_/g, ' ')}
          variant='filled'
          defaultValue={item[key]}
        />
        */
}
