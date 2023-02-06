import countries from "../../countries.json"
import {useParams} from "react-router-dom"
import style from "./style.module.css"
import {Link} from "react-router-dom"


export function CountryDetails() {

    const params = useParams()

    const country = countries.filter((currentCountry) => {
        return currentCountry.alpha3Code === params.alpha3Code
    })[0]


  
    return (
        <div className={style.container} >
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
            <p>Capital: {country.capital}</p>
            <hr/>
            <p>Area: {country.area} km²</p>
            <hr/>
           <p>{country.borders}</p> 
        </div>
    )
}