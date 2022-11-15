import './App.css';
import {Container, Divider, Stack} from "@mui/material";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">
      <Container style={{padding: 0}}>
          <Stack spacing={3} >
              <AllBeers />
              <RandomBeer />
              <NewBeer />
          </Stack>
      </Container>
    </div>
  );
}

export default App;
