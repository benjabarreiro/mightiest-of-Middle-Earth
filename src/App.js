import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Sauron from './components/Sauron';
import Ringwraiths from './components/Ringwraiths';
import Saruman from './components/Saruman';
import Gandalf from './components/Gandalf';
import Elrond from './components/Elrond';
import Galadriel from './components/Galadriel';
import About from './components/About';

const characters = [
  {
    id: 1,
    name: "Sauron",
    aliases: [
      "The Dark Lord",
      "The Lord of the Rings"
    ],
    description: "",
    image: ""
  },
  {
    id: 2,
    name: "Ringwraiths",
    aliases: [
      "Shadows of mordor",
      "Servants of The Lord of the Rings"
    ],
    description: "Former kings, corrupted by Sauron",
    image: ""
  },
  {
    id: 3,
    name: "Saruman",
    aliases: [
      "The White Wizard",
      "Lord of Isengard"
    ],
    description: "He is the head of the council",
    image: ""
  },
  {
    id: 4,
    name: "Gandalf",
    aliases: [
      "Gandalf the Grey",
      "Mithrandir"
    ],
    description: "He is a member of the council, a wise wizard but short of temper",
    image: ""
  },
  {
    id: 5,
    name: "Elrond",
    aliases: "Lord of Rivendel",
    description: "He is an elf, lord of the last home in the west",
    image: ""
  },
  {
    id: 6,
    name: "Galadriel",
    aliases: "Lady of Lothlorien",
    description: "Powerful elf, she managed to refused the ring from Frodo",
    image: ""
  }
]

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact render={(props) => (
          <>
            <Home />
          </>
        )} />
        <Route path="/Sauron" render={(props) => (
          <>
            <Sauron characters={characters} />
          </>
        )} />
        <Route path="/Ringwraiths" render={(props) => (
          <>
            <Ringwraiths characters={characters} />
          </>
        )} />
        <Route path="/Saruman" render={(props) => (
          <>
            <Saruman characters={characters} />
          </>
        )} />
        <Route path="/Gandalf" render={(props) => (
          <>
            <Gandalf characters={characters} />
          </>
        )} />
        <Route path="/Elrond" render={(props) => (
          <>
            <Elrond characters={characters} />
          </>
        )} />
        <Route path="/Galadriel" render={(props) => (
          <>
            <Galadriel characters={characters} />
          </>
        )} />
        <Route path="/about-this-page" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
