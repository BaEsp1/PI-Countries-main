import Card from "../Card/Card"

export default function Home (props) {
    const {countries} = props

    return (
        <div>
            <h1>Soy el Home</h1>
            <div>
                {countries.map((country) => <Card 
                                        flags = {country.flags}
                                        name = {country.name}
                                        Continent = {country.Continent}
                                        />)}
            </div>
        </div>
    )
};

