import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {useTranslation} from "react-i18next";
import "../../utils/i18next";
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

export default function Cars(props) {
    const {t} = useTranslation();
    const [carId, setCarId] = useState();
    const [checkIfUserClickAgain, setCheckIfUserClickAgain] = useState(false);
    async function getCars(e){
        let res = await fetch("https://localhost:8972/api/Car/Popularity", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            },
        });
        res = await res.json();
        let names = [];
        for(var i in res ){
            names[i] = res[i];
        }
        localStorage.setItem("cars", JSON.stringify(names));
    }
    getCars();

    const classes = useStyles();

    function setStateCarId(id){
        localStorage.setItem("carId", id);
    }
    function setStateCheck(){
        setCheckIfUserClickAgain(false);
    }
    function twoFunc(e){
        setStateCarId(e);
        setStateCheck();
    }

    return (
        <main>
            <Paper className={classes.mainFeaturePost}
            style={{ }}>
                <Container fixed>
                </Container>
            </Paper>
            <div className={classes.mainContent}>
                <Container maxWidth="md">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Yotor service</Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>  {t("car.title")}</Typography>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {JSON.parse(localStorage.getItem("cars")).map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                className={classes.cardMedia}
                                
                                image={card.photo}
                                title="image title"/>
                                <CardContent className={classes.cardContent}>
                                    <NavLink to="/detailedCar" onClick={ () => setStateCarId(card.car_id)}>
                                    <Typography variant="h5" gutterBottom>
                                        {card.model}
                                    </Typography>
                                    </NavLink>
                                    <Typography>
                                        {t("car.year")}: {card.year},<br/>
                                        {t("car.price")}: {card.price}, <br/>
                                        {t("car.description")}: {card.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    )
}

























//------------------

// export default function Cars(props) {
//     const history = useHistory();
//     const [cars, setCars] = useState([]);

//     async function getCars(e){
       

//         let res = await fetch("https://localhost:44312/api/Car", {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//                 "Authorization": "Bearer "+ localStorage.getItem("tok"),
//             },
//         });
//         setCars();
//         console.log(cars);
//         console.log(res);
//         console.log(res.status);
//         if(res.status === 200){
//             //history.push("/login")
//         }
//         res = await res.json();
//         localStorage.setItem("cars", JSON.stringify(res));
//     } 
//     return (
        
         
//         <table>
//            <thead>
//                 <tr>
//                    <th>Model</th>
//                     <th>Brand</th>
//                     <th>Year</th>
//                     <th>Transmission</th>
//                     <th>Address</th>
//                     <th>Type</th>
//                     <th>Price</th>
//                     <th>Description</th>
//                 </tr>
//             </thead>
//             <tbody>
        
//                 { JSON.parse(localStorage.getItem("cars")).map(item => { 
//                     return (

//                         <tr>  
//                             <td>{item.model}</td>
//                             <td>{item.brand}</td>
//                             <td>{item.year}</td>
//                             <td>{item.transmission}</td>
//                             <td>{item.address}</td>
//                             <td>{item.type}</td>
//                             <td>{item.price}</td>
//                             <td>{item.description}</td>
//                         </tr>
//                     );
//                 })}

//             </tbody>
//         </table>
        
        
//     );
// };
