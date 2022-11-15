import { Breadcrumbs, Link, Typography} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import Grid2 from "@mui/material/Unstable_Grid2";
import BeerCardDetails from "../components/BeerCardDetails";
import {useEffect, useState} from "react";
import axios from "axios";

export default function RandomBeerPage(props) {
    const [randomBeer, setRandomBeer] = useState(null);

    useEffect(() => {
        const getRandomBeer = () => {
            axios
                .get("https://ih-beers-api2.herokuapp.com/beers/random")
                .then(result => {
                    setRandomBeer(result.data);
                })
        }
        getRandomBeer();
    }, []);
    
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" style={{ padding: "25px 0" }}>
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </Link>
                <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                >
                    <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Random Beer
                </Typography>
            </Breadcrumbs>
            <Grid2 container spacing={2}>
                <Grid2 xs={12}>
                    { randomBeer !== null &&
                        <BeerCardDetails beer={randomBeer}/>
                    }
                </Grid2>
            </Grid2>
        </>
    );
}