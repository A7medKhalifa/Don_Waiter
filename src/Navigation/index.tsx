import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import SelectTypeScreen from "screens/App/Main select";
import RedeemRewardScreen from "screens/App/Redeem Reward";
import ReducePointsScreen from "screens/App/Reduce Points";
import LoginScreen from "screens/Auth/Login";
import { selectIsAuth } from "store/user";

type RootStack = {
    Login: undefined;
    SelectType: undefined;
    RedeemReward: undefined;
    ReducePoints: undefined;
}

const RootStack = createNativeStackNavigator<RootStack>();


const RootStackScreens = () => {
    const IsAuth = useSelector(selectIsAuth)
    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Login"
            >
                {
                    !IsAuth ?
                        <RootStack.Screen name="Login" component={LoginScreen} />
                        :
                        <>
                            <RootStack.Screen name="SelectType" component={SelectTypeScreen} />
                            <RootStack.Screen name="RedeemReward" component={RedeemRewardScreen} />
                            <RootStack.Screen name="ReducePoints" component={ReducePointsScreen} />
                        </>
                }
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootStackScreens;
