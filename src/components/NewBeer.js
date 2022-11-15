import {Container} from "@mui/material";
import NewBeerPng from "../assets/new-beer.png";

export default function NewBeer(props) {
    return (
        <section>
            <Container style={{background: `url(${NewBeerPng})`}}>
                <h2>New Beer</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Amet atque beatae commodi cumque, labore porro veniam 
                    voluptate voluptatum? Ab adipisci aut, distinctio eaque 
                    eligendi minus quasi ullam veniam voluptas voluptatum?</span>
            </Container>
        </section>
    );
}