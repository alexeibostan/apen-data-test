import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { CircularProgress, Snackbar } from '@material-ui/core';

import logo from './logo.svg';
import './App.css';

import { hideSnackbar } from './actions/app';

import Header from './components/Header';
import OpenData from './pages/OpenData';
import Package from './pages/Package';
import DoctorDetail from './pages/DoctorDetail';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let appBody = (
      <Switch>
        <Route component={Package} exact path='/' />
        <Route component={OpenData} exact path='/openData' />
        <Route component={DoctorDetail} path='/doctor' />
      </Switch>
    );
    if (this.props.isAppLoading) {
      appBody = (
        <div className='center-progress'>
          <CircularProgress />
        </div>
      );
    }
    return (
      <div className='App'>
        <Header />
        {appBody}
        <Snackbar
          open={this.props.snackBar.isOpen}
          autoHideDuration={6000}
          message={this.props.snackBar.message}
          onClose={() => this.props.onHideSnackbar()}
        ></Snackbar>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => {
  return {
    view: app.view,
    map: app.map,
    isAppLoading: app.isAppLoading,
    snackBar: app.snackBar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHideSnackbar: () => {
      dispatch(hideSnackbar());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
