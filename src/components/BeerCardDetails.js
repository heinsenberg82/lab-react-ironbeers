import "./BeerCard.css"
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Stack, Typography} from "@mui/material";

export default function BeerCardDetails({beer}) {
    return (
        <Card sx={{minHeight: "100%"}}>
            <CardHeader
                component={() => {
                    return <div style={{ padding: 10}}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="h5" component="span">
                                {beer.name}
                            </Typography>
                            <Typography variant="overline" component="span">
                                {beer.attenuation_level}
                            </Typography>
                        </Stack>
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                        <Typography variant="body1" component="span">
                            {beer.tagline}
                        </Typography>
                        <Typography variant="body2" component="span">
                            {beer.first_brewed}
                        </Typography>
                    </Stack>
                </div>

                }
            }/>
            <CardMedia component="img"
                       image={beer.image_url}
                       className="beer-card-media" />
            <CardContent>
                <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 2}}>
                    {beer.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Created by: {beer.contributed_by}
                </Typography> 
            </CardContent>
        </Card>
    );
}