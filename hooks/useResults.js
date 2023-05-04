import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try{                    
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'new orleans'
                }
        });
        setResults(response.data.businesses);
        setErrorMessage("");
        //console.log(response);
        }
        catch(e){
            setErrorMessage("IDK something's wrong yo...")
        }
    }

    // will run once when app launches
    useEffect( () =>{
        searchApi("pizza");
    },[])
    return [searchApi, results, errorMessage];
};