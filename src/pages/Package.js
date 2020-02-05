import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Typography } from '@material-ui/core';

import { selectPackage } from '../actions/package';
import { fetchPaginate } from '../actions/doctor';
import { changeToolbarTitle, setToolbarButtons } from '../actions/app';
import PackageList from '../components/PackageList';

class Package extends Component {
  constructor(props) {
    super(props);
    props.setToolbar('Open Data Piemonte', []);
  }
  render() {
    const { packages, selectedPack, onSelectPack } = this.props;
    return (
      <div className='package-container'>
        <Typography variant='subtitle1'>
          Elenco di alcuni data set accessibili tramite API del portale:
          <a target='_blank' href='http://www.dati.piemonte.it/'>
            www.dati.piemonte.it
          </a>
        </Typography>

        <PackageList
          packages={packages}
          selectedPack={selectedPack}
          onSelectPack={pack => onSelectPack(pack)}
        />
      </div>
    );
  }
}

Package.propTypes = {
  packages: PropTypes.array.isRequired,
  selectedPack: PropTypes.string.isRequired,
  onSelectPack: PropTypes.func.isRequired,
  setToolbar: PropTypes.func.isRequired
};

const mapStateToProps = ({ packages }) => {
  return {
    packages: packages.packages,
    selectedPack: packages.selectedPack
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToolbar: (title, buttons) => {
      dispatch(changeToolbarTitle(title));
      dispatch(setToolbarButtons(buttons));
    },
    onSelectPack: pack => {
      dispatch(selectPackage(pack));
      dispatch(fetchPaginate(0));
      dispatch(push('/openData'));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Package);
