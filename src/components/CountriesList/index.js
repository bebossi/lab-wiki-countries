import {Link} from "react-router-dom"
import style from "./style.module.css"


export function CountriesList(props){

  
  const {countryName, alpha2Code, alpha3Code} = props

    return (
        <Link to={`/${alpha3Code}`} >
   <div className={style.container}>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code}.png`} />
        <p>{countryName}</p>  
    </div>
    </Link>
  
    )
}