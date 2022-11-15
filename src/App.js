import './App.css';
import {Container} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";

function App() {
    return (
    <div className="App" style={{overflow: "auto"}}>
        <Container maxWidth="md" style={{height: "100%"}}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/beers" element={<AllBeersPage/>}/>
                <Route path="/random-beer" element={<RandomBeerPage/>}/>
            </Routes>
        </Container>
    </div>
  );
}

export default App;
