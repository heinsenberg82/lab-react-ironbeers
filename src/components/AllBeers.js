import {Container} from "@mui/material";
import Beers from "../assets/beers.png";

export default function AllBeers(props) {
    return (
        <section>
            <Container style={{background: `url(${Beers})`}}>
                <h2>All beers</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi corporis 
                    delectus doloremque ducimus eos esse, expedita, in laboriosam libero modi officiis repellat 
                    tempore vel vitae. Aut beatae dolorem veniam?
                </span>
            </Container>
        </section>
    );
}