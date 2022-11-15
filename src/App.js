import './App.css';
import {Container, Stack} from "@mui/material";
import Background from "./assets/background.jpg"
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";

function App() {
    return (
    <div className="App" style={{overflow: "auto"}}>
        <Container maxWidth="md" style={{height: "100%"}}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/beers" element={<AllBeersPage/>}/>
            </Routes>
        </Container>
    </div>
  );
}

export default App;
