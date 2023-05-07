import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./screens/SearchScreen";
import ResultsShowScreen from "./screens/ResultsShowScreen";

const navigator = createStackNavigator({
    Search : SearchScreen,
    ResultsShow : ResultsShowScreen    
},
{
    initialRouteName: "Search",
    defaultNavigationOptions: {
        title : "Buisness Search"
    }
});

export default createAppContainer(navigator);