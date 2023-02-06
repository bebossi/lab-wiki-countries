import countries from "../../countries.json"
import { CountriesList } from "../CountriesList/index.js";


export function Section(){

    return(
        <>
        {countries.map((currentCountrie) => {
            return(
              <CountriesList countryName={currentCountrie.name.official} alpha2Code={currentCountrie.alpha2Code.toLowerCase()}
              alpha3Code={currentCountrie.alpha3Code} />
            )
          })}
          </>
    )
}