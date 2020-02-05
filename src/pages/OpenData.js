import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Button
} from '@material-ui/core';

import {
  changeToolbarTitle,
  closeDialog,
  setToolbarButtons
} from '../actions/app';
import { fetchPaginate, setRequestFilter } from '../actions/doctor';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import TableDoctorContainer from '../containers/TableDoctorContainer';
import FilterForm from '../components/FilterForm';
import ColumnsChips from '../components/ColumnsChips';

class OpenData extends Component {
  constructor(props) {
    super(props);
    const toolbarButtons = [
      { id: 'SEARCH', title: 'Cerca' },
      { id: 'LIST', title: 'Lista' }
    ];
    this.props.setToolbar(props.title, toolbarButtons);

    this.state = {
      filterForm: {
        searchString: props.startsWith,
        searchField: props.filterField
      }
    };
  }

  submitForm() {
    this.props.onCloseDialog();
    this.props.onSubmitFilter(this.state.filterForm);
  }

  changeForm(changedEvent) {
    const { name, value } = changedEvent.target;
    const { filterForm } = this.state;
    filterForm[name] = value;
    this.setState({ filterForm });
  }

  render() {
    // SETUP THE BODY VIEW
    let bodyView = '';
    if (this.props.view === 'LIST') {
      bodyView = <TableDoctorContainer />;
    } else if (this.props.view === 'MAP') {
      const position = [this.props.map.lat, this.props.map.lng];
      bodyView = (
        <Map center={position} zoom={this.props.map.zoom}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      );
    }
    return (
      <div>
        <Dialog
          open={this.props.isDialogOpen}
          onClose={() => this.props.onCloseDialog()}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Filtri di ricerca</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Filtra i dottori per i seguenti campi
            </DialogContentText>
            <FilterForm
              itemFields={this.props.doctorFields}
              searchString={this.state.filterForm.searchString}
              searchField={this.state.filterForm.searchField}
              onFormChanges={filterForm => this.changeForm(filterForm)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.onCloseDialog()} color='primary'>
              Chiudi
            </Button>
            <Button onClick={() => this.submitForm()} color='primary'>
              Cerca
            </Button>
          </DialogActions>
        </Dialog>
        <ColumnsChips />
        {bodyView}
      </div>
    );
  }
}

OpenData.propTypes = {
  view: PropTypes.string.isRequired,
  map: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  doctorFields: PropTypes.array.isRequired,
  onSubmitFilter: PropTypes.func.isRequired
};

const mapStateToProps = ({ app, doctors, packages }) => {
  return {
    view: app.view,
    map: app.map,
    title: packages.selectedPack,
    doctorFields: doctors.doctorFields,
    isDialogOpen: app.isDialogOpen,
    startsWith: doctors.startsWith,
    filterField: doctors.filterField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToolbar: (title, buttons) => {
      dispatch(changeToolbarTitle(title));
      dispatch(setToolbarButtons(buttons));
    },
    onSubmitFilter: ({ searchString, searchField }) => {
      dispatch(setRequestFilter(searchString, searchField));
      dispatch(fetchPaginate(0));
    },
    onCloseDialog: () => {
      dispatch(closeDialog());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenData);
