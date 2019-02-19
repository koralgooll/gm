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

const styles = theme => (
    {
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 140,
            width: 100,
        },
        control: {
            padding: theme.spacing.unit * 2,
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardMedia: {
            paddingTop: '56.25%', // 16:9
        },
        cardContent: {
            flexGrow: 1,
        },

    }
);

class PartiesGrid extends Component {
    
    state = {
        spacing: '16',
    };

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        const { parties } = this.props;
        parties.sort(function(a, b){return 0.5 - Math.random()});
        
        return (
            <Grid container className={classes.root} spacing={40}>
                {parties.map(party => (
                    <Grid item key={party.ewp} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={party.logo}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {party.name}
                                </Typography>
                                <Typography>
                                    {party.adress}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href={party.www}>
                                    WWW
                                </Button>
                                <Button size="small" color="primary" href="">
                                    Statut
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        );
      }
}

PartiesGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(PartiesGrid);
