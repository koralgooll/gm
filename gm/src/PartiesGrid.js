import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import PartyCard from './PartyCard';

const styles = theme => (
    {
        root: {
            flexGrow: 1,
        }
    }
);

class PartiesGrid extends Component {
    
    state = {
        spacing: 40,
    };

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        const { parties } = this.props;
        const { filters } = this.props;
        parties.sort(function(a, b){return 0.5 - Math.random()});
        
        return (
            <Grid container className={classes.root} spacing={spacing}>
                {parties.map(party => (
                    <PartyCard party={party} filters={filters} key={party.ewp}></PartyCard>
                ))}
            </Grid>
        );
      }
}

PartiesGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(PartiesGrid);
