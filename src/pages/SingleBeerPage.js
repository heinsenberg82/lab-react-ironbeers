import {Box, Breadcrumbs, CircularProgress, Link as MuiLink, Modal, Typography} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import Grid2 from "@mui/material/Unstable_Grid2";
import BeerCardDetails from "../components/BeerCardDetails";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useLocation, useParams} from "react-router-dom";

export default function SingleBeerPage() {
    const { id } = useParams();
    const [beer, setBeer] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getBeer = () => {
            const url = id
                ? `https://ih-beers-api2.herokuapp.com/beers/${ id }`
                : "https://ih-beers-api2.herokuapp.com/beers/random"
            
            setIsLoading(true);
            axios.get(url)
                .then(result => {
                    console.log(result.data)
                    setBeer(result.data);
                }).finally(() => setIsLoading(false));
        }
        getBeer();
    }, []);
    
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" style={{ padding: "25px 0" }}>
                <MuiLink
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    component={Link} to="/"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </MuiLink>
                <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                >
                    <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    { id ? beer?.name : 'Random Beer' }
                </Typography>
            </Breadcrumbs>
            { isLoading &&
                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", minHeight: 200}}>
                    <CircularProgress />
                </Box>
            }
            { !isLoading && <Grid2 container spacing={2}>
                <Grid2 xs={12}>
                    { beer !== null &&
                        <BeerCardDetails beer={beer}/>
                    }
                </Grid2>
            </Grid2> }
        </>
    );
}