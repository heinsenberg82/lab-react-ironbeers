import {Container} from "@mui/material";

export default function Feature({image, title, children}) {
    return (
        <section>
            <Container style={{background: `url(${image})`}}>
                <h2>{title}</h2>
                <span>{children}</span>
            </Container>
        </section>
    );
}