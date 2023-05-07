import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = (props) => {
    if(!props.results.length){
        return null;
    }
    return <View style={styles.container}>
        <Text style={styles.title}>Hello! {props.headerText}</Text>
        <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.results}
            keyExtractor={(results) => {return results.id}}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => {props.navigation.navigate("ResultsShow", { id: item.id })}}>
                        <ResultsDetail result={item} /> 
                    </TouchableOpacity>
                )
            }}
        />

    </View>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title:{
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default withNavigation(ResultsList);