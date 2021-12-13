import React, {useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import bandmate from './images/bandmate.png'
import { useDispatch } from "react-redux";

import { getSongs } from './actions/songs'

import Songs from './components/songs/Songs';
import SongForm from './components/songForm/SongForm';
import useStyles from './styles'

const App = ()=> {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getSongs());
    },[dispatch])

    return (
        <Container maxidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} varaint="h2" align='center'>BandMate</Typography>
                <img className={classes.image} src={bandmate} alt='bandmate' height='60' width='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Songs /> 
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <SongForm />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
