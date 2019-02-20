import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
});

class PartyFilter extends Component {

    state = {
        parliamentaryElections2019: true,
        socjalizm: true,
        leseferyzm: true,
        konserwatyzm: true,
        liberalizm: true,
        gilad: false,
        jason: false,
        antoine: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
        console.log("PartyFilter")
        console.log({ [name]: event.target.checked })
        this.props.filterPartiesCards({ [name]: event.target.checked })
        /*this.props.filterPartiesCards({
            parliamentaryElections2019: this.state.parliamentaryElections2019,
            socjalizm: this.state.socjalizm,
            leseferyzm: this.state.leseferyzm,
            konserwatyzm: this.state.konserwatyzm,
            liberalizm: this.state.liberalizm
        })
        */
    };

    static filer(party, filters) {
        if (party.filet.socjalizm == filters.socjalizm) {
            return true;
        }
        //if (party.ewp <= 12) return true;
        return false;
    }

    render() {
        const { classes } = this.props;
        const { gilad, jason, antoine, parliamentaryElections2019,
                socjalizm, leseferyzm, konserwatyzm, liberalizm } = this.state;
        const error = [gilad, jason, antoine, parliamentaryElections2019]
            .filter(v => v).length !== 2;

        return (
            <Grid container className={classes.root}>
                <Grid container>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Wybory 2019</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={parliamentaryElections2019} 
                                    onChange={this.handleChange('parliamentaryElections2019')} 
                                    value="parliamentaryElections2019" />
                                }
                                label="Startuje w wuborach parlamentarnych 2019"
                            />
                        </FormGroup>
                        <FormHelperText>Be careful</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid container>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Podział ideologiczno-programowy</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={socjalizm} 
                                    onChange={this.handleChange('socjalizm')} 
                                    value="socjalizm" />
                                }
                                label="socjalizm"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={leseferyzm} 
                                    onChange={this.handleChange('leseferyzm')} 
                                    value="leseferyzm" />
                                }
                                label="leseferyzm"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={konserwatyzm} 
                                    onChange={this.handleChange('konserwatyzm')} 
                                    value="konserwatyzm" />
                                }
                                label="konserwatyzm"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={liberalizm} 
                                    onChange={this.handleChange('liberalizm')} 
                                    value="liberalizm" />
                                }
                                label="liberalizm"
                            />
                        </FormGroup>
                        <FormHelperText>Be careful</FormHelperText>
                    </FormControl>
                </Grid>
                
                <Grid container>
                    <FormControl required error={error} component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Pick two</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad" />
                                }
                                label="Gilad Gray"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={jason} onChange={this.handleChange('jason')} value="jason" />
                                }
                                label="Jason Killian"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={antoine}
                                        onChange={this.handleChange('antoine')}
                                        value="antoine"
                                    />
                                }
                                label="Antoine Llorca"
                            />
                        </FormGroup>
                        <FormHelperText>You can display an error</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        );
    }
}

PartyFilter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PartyFilter);
