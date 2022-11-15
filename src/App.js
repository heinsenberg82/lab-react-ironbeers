import './App.css';
import {Container, Stack} from "@mui/material";
import Background from "./assets/background.jpg"
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";

function App() {
    return (
    <div className="App" style={{background: `url(${Background})`}}>
        <Container maxWidth="md">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/AllBeers" element={<AllBeersPage/>}/>
            </Routes>
        </Container>
    </div>
  );
}

export default App;
