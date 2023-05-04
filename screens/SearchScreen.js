import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../componets/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();   
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