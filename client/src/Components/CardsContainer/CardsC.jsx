import Card from "../Card/Card"
import styled from "styled-components"

const Conta = styled.div`
border:1px solid black;
display:flex;
flex-direction: row;
corder-radius: 15px;
flex-wrap: wrap;
gap: 2em;
margin:auto;
`;

const CardsContainer = () => {

    const countries = [
    {"name":{"common":"Barbados","official":"Barbados","nativeName":{"eng":{"official":"Barbados","common":"Barbados"}}},
    "cca3":"BRB",
    "capital":["Bridgetown"],
    "region":"Americas",
    "subregion":"Caribbean",
    "area":430.0,
    "population":287371,
    "continents":["North America"],
    "flags":{"png":"https://flagcdn.com/w320/bb.png","svg":"https://flagcdn.com/bb.svg",}},
    
    {"name":{"common":"Réunion","official":"Réunion Island","nativeName":{"fra":{"official":"Ile de la Réunion","common":"La Réunion"}}},
    "cca3":"REU",
    "capital":["Saint-Denis"],"altSpellings":["RE","Reunion"],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "area":2511.0,
    "population":840974,"car":{"signs":["F"],"side":"right"},"timezones":["UTC+04:00"],
    "continents":["Africa"],
    "flags":{"png":"https://flagcdn.com/w320/re.png","svg":"https://flagcdn.com/re.svg"}},

    {"name":{"common":"Suriname","official":"Republic of Suriname","nativeName":{"nld":{"official":"Republiek Suriname","common":"Suriname"}}},
    "cca3":"SUR",
    "capital":["Paramaribo"],
    "region":"Americas",
    "subregion":"South America"
    ,"area":163820.0,
    "population":586634,
    "continents":["South America"],
    "flags":{"png":"https://flagcdn.com/w320/sr.png","svg":"https://flagcdn.com/sr.svg"}},

    {"name":{"common":"Namibia","official":"Republic of Namibia"},
    "cca3":"NAM",
    "region":"Africa",
    "subregion":"Southern Africa",
    "area":825615.0,
    "population":2540916,
    "continents":["Africa"],
    "flags":{"png":"https://flagcdn.com/w320/na.png","svg":"https://flagcdn.com/na.svg",}}
];
    
    return(
        <Conta>
            {countries.map((country) => <Card 
                                        flags = {country.flags.png}
                                        name = {country.name.common}
                                        continents = {country.continents}
                                        />)}
        </Conta>
    )
}


export default CardsContainer;