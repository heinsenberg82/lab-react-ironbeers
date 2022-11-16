import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import "./BeerCard.css"
import {useNavigate} from "react-router-dom";

export default function BeerCard({beer}) {
    const navigate = useNavigate();
    
    const handleClick = e => {
        e.preventDefault();
        navigate(`/beers/${ beer._id }`);
    }
    
    return (
        <Card sx={{minHeight: "100%"}}>
            <CardHeader title={beer.name} subheader={beer.tagline}/>
            <CardMedia component="img" 
                       image={beer.image_url} 
                       className="beer-card-media" />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Created by: {beer.contributed_by}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleClick}>Learn More</Button>
            </CardActions>
        </Card>
    );
}