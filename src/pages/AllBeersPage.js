import {useState, useEffect} from "react";
import axios from "axios";
import {
    Box,
    Breadcrumbs,
    CircularProgress,
    IconButton,
    InputBase,
    Link as MuiLink,
    Paper,
    Typography
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from '@mui/icons-material/Grain';
import SearchIcon from '@mui/icons-material/Search';
import BeerCard from "../components/BeerdCard";
import {Link, useNavigate} from "react-router-dom";

export default function AllBeersPage(props) {
    const [allBeers, setAllBeers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const getAllBeers = () => {
            setLoading(true);
            
            const url = filter 
                ? `https://ih-beers-api2.herokuapp.com/beers/search?q=${filter}`
                : "https://ih-beers-api2.herokuapp.com/beers";
            
            axios
                .get(url)
                .then(result => {
                    setAllBeers(result.data);
                })
                .finally(() => setLoading(false));
        }
        getAllBeers();
    }, [filter]);   
    
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" style={{ padding: "25px 0" }}>
                <MuiLink
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    component={Link} to="../"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </MuiLink>
                <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                >
                    <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Beers
                </Typography>
            </Breadcrumbs>
            <Paper
                sx={{ p: '2px 4px', m: '15px 0', display: 'flex', alignItems: 'center', width: "100%" }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Beer"
                    inputProps={{ 'aria-label': 'search beer' }}
                    onChange={e => setFilter(e.target.value)}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            { loading && 
                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", minHeight: 200}}>
                    <CircularProgress />
                </Box>}
            { !loading && <Grid2 container spacing={2}>
                { allBeers?.length > 0 && allBeers.map(beer =>
                    <Grid2 xs={6} md={4} >
                        <BeerCard beer={beer}/>
                    </Grid2>
                )}
            </Grid2> }
        </>
    );
}