import './App.css';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import {Container} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import NewBeerPage from "./pages/NewBeerPage";
import {LocalizationProvider} from "@mui/x-date-pickers";

function App() {
    return (
    <div className="App" style={{overflow: "auto"}}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Container maxWidth="md" style={{height: "100%"}}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/beers" element={<AllBeersPage/>}/>
                    <Route path="/random-beer" element={<RandomBeerPage/>}/>
                    <Route path="/new-beer" element={<NewBeerPage/>}/>
                </Routes>
            </Container>
        </LocalizationProvider>
    </div>
  );
}

export default App;
