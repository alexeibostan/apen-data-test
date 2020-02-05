import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';

import { openDialog } from '../actions/app';
import { fetchPaginate, setRequestFilter } from '../actions/doctor';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 2
  }
}));

const Header = ({ titleBar, buttons, onButtonClick }) => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          {titleBar}
        </Typography>
        {buttons.map(btn => (
          <Button
            key={btn.id}
            onClick={() => onButtonClick(btn.id)}
            color='secondary'
          >
            {btn.title}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  titleBar: PropTypes.string.isRequired,
  buttons: PropTypes.array.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = ({ app }) => {
  return {
    titleBar: app.titleBar,
    buttons: app.buttonsBar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: buttonId => {
      switch (buttonId) {
        case 'SEARCH':
          dispatch(openDialog());
          break;
        case 'LIST':
          dispatch(setRequestFilter('', ''));
          dispatch(fetchPaginate(0));
          break;
        default:
          break;
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
