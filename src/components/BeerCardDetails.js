import "./BeerCard.css"
import {Card, CardContent, CardHeader, CardMedia, Stack, Typography} from "@mui/material";
import moment from "moment";

export default function BeerCardDetails({beer}) {
    const handleDate = dateString => {
        const parsed = moment(dateString);
        return parsed.isValid()
            ? parsed.format("MM/YYYY")
            : dateString;
    }
    
    return (
        <>
            { beer && <Card sx={{minHeight: "100%"}}>
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
                                    {handleDate(beer.first_brewed)}
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
            </Card> }
        </>
        
    );
}