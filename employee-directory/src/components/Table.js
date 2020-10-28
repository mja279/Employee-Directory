import React, {useState, useEffect} from "react";
import Row from "./Row";
import Header from "./Header";
import API from "../utils/API";

export default function Table () {

    const [employees, setEmployeesState] = useState([]);

   
    useEffect(() => {
        API.getUsers().then(data =>  {
         setEmployeesState(data.data.results);
            }  
        )
    }, []);


    return (
        <div className="col-md-12">
            <Header />
            {employees.map(result => {
                return <Row 
                image={result.picture.medium}
                firstName={result.name.first} 
                lastName={result.name.last}
                />

            })}
        </div>
    )
}



