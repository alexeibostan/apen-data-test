import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
  TablePagination,
  TableSortLabel
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const TableDoctor = ({
  columns,
  rows,
  rowsPerPage,
  totalRows,
  page,
  onChangePage,
  orderDirection,
  orderBy,
  onSortDoctors,
  onRowSelected
}) => {
  const classes = useStyles();
  if (!rows.length) {
    return <h3>No data to display</h3>;
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell align='right' key={column}>
                {column.replace(/_/g, ' ')}
                <TableSortLabel
                  onClick={() =>
                    onSortDoctors(
                      orderDirection === 'asc' ? 'desc' : 'asc',
                      column
                    )
                  }
                  direction={orderDirection === 'asc' ? 'desc' : 'asc'}
                ></TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.internalId}
              selected={true}
              hover={true}
              onClick={() => onRowSelected(row)}
            >
              {columns.map(column => (
                <TableCell key={column} align='right'>
                  {row[column]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[rowsPerPage]}
              count={totalRows}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={(event, page) => onChangePage(page)}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

TableDoctor.propTypes = {
  colums: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  totalRows: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onRowSelected: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  orderBy: PropTypes.string.isRequired,
  orderDirection: PropTypes.string.isRequired
};

export default TableDoctor;
