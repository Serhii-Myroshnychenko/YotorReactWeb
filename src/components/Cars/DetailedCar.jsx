import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import {AppBar, Container, Toolbar, IconButton, Typography, Paper, Box, Grid, Card, CardMedia, CardContent, CardActions} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },
    mainFeaturePost:{
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    mainFeaturePostContent:{
        position: "relative",
        padding: theme.spacing(3)
    },
    cardMedia:{
        paddingTop:"56.25%"
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid:{
        marginTop: theme.spacing(4)
    }
}))

export default function DetailedCar(props) {


    var items = JSON.parse(localStorage.getItem("cars"));
    let result = [];
    for(let i = 0; i < items.length; i++ ){
        if(items[i].car_id == localStorage.getItem("carId")){
            result.push(JSON.parse(localStorage.getItem("cars"))[i]);
        }
         console.log(JSON.parse(localStorage.getItem("cars"))[i].car_id);
    }

    var items = JSON.parse(localStorage.getItem("cars"));
    const classes = useStyles();
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div>
            <div className={classes.mainContent}>
                {}
                <Container maxWidth="md">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>{}</Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>dksfkdsfksdflsdfds
                        dkfsdkfskdmfkldsfm
                        sdpkfmdkslfmksdmflskdmflsdmflsdfm
                        dspkfmsdkfmsk;dfm;ksdf</Typography>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">Start Now</Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}