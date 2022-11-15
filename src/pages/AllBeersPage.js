import {useState, useEffect} from "react";
import axios from "axios";
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

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
        <Grid2 container spacing={2}>
            { allBeers && allBeers.map(beer => 
                <Grid2 xs={6} md={4} >
                    <Card>
                        <CardHeader title={beer.name} subheader={beer.tagline}/>
                        <CardMedia component="img" image={beer.image_url} sx={{maxHeight: 100, width: "auto"}}/>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Created by: {beer.contributed_by}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
            )}
        </Grid2>
    );
}