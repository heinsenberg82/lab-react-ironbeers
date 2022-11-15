import {Container} from "@mui/material";
import {Link} from "react-router-dom";

export default function Feature({image, title, children, link}) {
    return (
        <section>
            <Link to={link}>
                <Container style={{background: `url(${image})`}}>
                    <h2>{title}</h2>
                    <span>{children}</span>
                </Container>
            </Link>
        </section>
    );
}