import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../componets/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState("");
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

    return <View>
        <SearchBar 
            searchTerm={searchTerm} 
            onTermChange={(newTerm) => setSearchTerm(newTerm)}
            onSearchTermSubmit={() => {searchApi(searchTerm)}}
            /> 
        <Text>Hello Search Screen!</Text>
        <Text>We have found {results.length} results!</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null} 
    </View>
}

const style = StyleSheet.create({});

export default SearchScreen;