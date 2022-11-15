import {useState, useEffect} from "react";
import axios from "axios";
import {Breadcrumbs, Card, CardContent, CardHeader, CardMedia, Link, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import BeerdCardDetails from "../components/BeerdCardDetails";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from '@mui/icons-material/Grain';

export default function AllBeersPage(props) {
    const [allBeers, setAllBeers] = useState([]);

    useEffect(() => {
        const getAllBeers = () => {
            const allBeers = axios
                .get("https://ih-beers-api2.herokuapp.com/beers")
                .then(result => {
                    console.log(result.data);
                    setAllBeers(result.data);
                })
        }
        getAllBeers();
    }, []);
    
    
    return (
        <div style={{minHeight: 800}}>
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
                    Beers
                </Typography>
            </Breadcrumbs>
            <Grid2 container spacing={2}>
                { allBeers && allBeers.map(beer =>
                    <Grid2 xs={6} md={4} >
                        <BeerdCardDetails beer={beer} />
                    </Grid2>
                )}
            </Grid2>
        </div>
    );
}