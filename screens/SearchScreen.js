import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../componets/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../componets/ResultsList";

const SearchScreen = ({navigation}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();  
    //console.log(results);
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        let myfilteredArray = results.filter( (results) => {
            return results.price === price;
        })
        return myfilteredArray;
    }
    return <View style={styles.container}>
        <SearchBar 
            searchTerm={searchTerm} 
            onTermChange={(newTerm) => setSearchTerm(newTerm)}
            onSearchTermSubmit={() => {searchApi(searchTerm)}}
            /> 
        
        
        {errorMessage ? <Text>{errorMessage}</Text> : null} 
        <ScrollView>
            <ResultsList results={filterResultsByPrice("$")} headerText="Budget Options"/>
            <ResultsList results={filterResultsByPrice("$$")} headerText="Kinda Pricey"/>
            <ResultsList results={filterResultsByPrice("$$$")} headerText="$$$ Dolla Dolla Billz Y'all $$$"/>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container:{
        //borderColor: 'red',
        //borderWidth: 3,
        flex: 1
    }
});

export default SearchScreen;