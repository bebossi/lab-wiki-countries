import { NavBar } from "./components/NavBar";
import { Section } from "./components/Section";
import { Route, Routes } from "react-router-dom"
import { CountryDetails } from "./components/CountryDetails";
import css from "./App.css"

function App() {
  return (
    <div className="container" >
      <section>
      <NavBar />
        <Section />
        </section>
      <Routes>
        <Route path="/:alpha3Code" element={ <CountryDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
