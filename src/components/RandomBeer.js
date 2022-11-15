import {Container} from "@mui/material";
import RandomBeerPng from "../assets/random-beer.png";
import Beers from "../assets/beers.png";

export default function RandomBeer(props) {
    return (
        <section>
            <Container style={{background: `url(${RandomBeerPng})`}}>
                <h2>Random Beer</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Amet atque beatae commodi cumque, labore porro veniam 
                    voluptate voluptatum? Ab adipisci aut, distinctio eaque 
                    eligendi minus quasi ullam veniam voluptas voluptatum?</span>
            </Container>
        </section>
    );
}