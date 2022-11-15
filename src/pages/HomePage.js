import Beers from "../assets/beers.png";
import RandomBeerPng from "../assets/random-beer.png";
import NewBeerPng from "../assets/new-beer.png";
import Feature from "../components/Feature";
import {Divider, Stack} from "@mui/material";

export default function HomePage(props) {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi in laudantium magnam, odio reiciendis rerum sequi sunt tenetur voluptate. Assumenda ea excepturi, hic molestiae obcaecati odio quia suscipit ullam!";

    const features = [
        { title: "All Beers", image: Beers, lorem, link: "/beers" },
        { title: "Random Beer", image: RandomBeerPng, lorem},
        { title: "New Beer", image: NewBeerPng, lorem}
    ]
    
    return (
        <Stack spacing={3} divider={ 
            <Divider light={true} sx={{ 
                borderBottomWidth: 5,
                borderRadius: "20%",
                borderColor: "#ffe0b2"
            }} />
        }>
            { features.map(({title, image, lorem, link}, index) =>
                <Feature key={index} title={title} image={image} link={link}>{lorem}</Feature>
            )}
        </Stack>
    );
}