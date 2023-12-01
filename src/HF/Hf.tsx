import { PermissionsAndroid } from "react-native";

export async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Don Eatery Waiter',
                'message': 'Don Eatery Waiter App access to your location '
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the location")
            console.log("You can use the location");
        } else {
            console.log("location permission denied")
            console.log("Location permission denied");
        }
    } catch (err) {
        console.warn(err)
    }
}