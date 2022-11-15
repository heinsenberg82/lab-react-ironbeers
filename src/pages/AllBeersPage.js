import {useState, useEffect} from "react";
import axios from "axios";
import {Box, Breadcrumbs, Link as MuiLink, Modal, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import BeerCardDetails from "../components/BeerCardDetails";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from '@mui/icons-material/Grain';
import BeerCard from "../components/BeerdCard";
import {Link} from "react-router-dom";

export default function AllBeersPage(props) {
    const [allBeers, setAllBeers] = useState([]);
    const [ selectedBeer, setSelectedBeer ] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 0,
        
    };
    
    const handleModalOpen = clickedBeer => {
        setSelectedBeer(clickedBeer);
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setSelectedBeer(null);
        setOpenModal(false);
    };

    useEffect(() => {
        const getAllBeers = () => {
            axios
                .get("https://ih-beers-api2.herokuapp.com/beers")
                .then(result => {
                    setAllBeers(result.data);
                })
        }
        getAllBeers();
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
                    Beers
                </Typography>
            </Breadcrumbs>
            <Grid2 container spacing={2}>
                { allBeers?.length > 0 && allBeers.map(beer =>
                    <Grid2 xs={6} md={4} >
                        <BeerCard beer={beer} openModal={handleModalOpen}/>
                    </Grid2>
                )}
            </Grid2>
            <Modal open={openModal} onClose={handleModalClose} >
                <Box sx={ modalStyle}>
                    <BeerCardDetails beer={selectedBeer}/>
                </Box>
            </Modal>
        </>
    );
}