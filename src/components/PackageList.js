import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  Grid,
  makeStyles,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';
import ArchiveIcon from '@material-ui/icons/Archive';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2)
  },
  card: {
    maxWidth: 260
  }
}));

const PackageList = ({ packages, selectedPack, onSelectPack }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      {packages.map(item => (
        <Grid item xs={3} key={item}>
          <Card onClick={() => onSelectPack(item)} className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {item}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Lista dati
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

PackageList.propTypes = {
  packages: PropTypes.array.isRequired,
  selectedPack: PropTypes.string.isRequired,
  onSelectPack: PropTypes.func.isRequired
};

export default PackageList;
