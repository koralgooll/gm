import React from 'react';

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
import PartyFilter from './PartyFilter';


const styles = theme => (
    {
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

const PartyCard = ({ party, classes, filters }) => {

    if (PartyFilter.filer(party, filters)) {
        return (
            <Grid item key={party.ewp} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={party.logo}
                        title="Image title"
                    />
                    <Divider variant="middle" />
                    <Divider variant="middle" />
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
        )
    } else {
        return null;
    }
}

export default withStyles(styles)(PartyCard);
