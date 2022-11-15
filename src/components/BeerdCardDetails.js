import {Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import "./BeerCardDetails.css"

export default function BeerdCardDetails({beer}) {
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
        </Card>
    );
}