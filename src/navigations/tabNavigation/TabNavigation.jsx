import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Appointments from '../../screens/appointments/Appointments.jsx'
import Profile from "../../screens/profile/Profile.jsx"
import icon from "../../constants/icon.js"
import { styles } from "./tabNavigation.style.js"
import { Image, Text } from "react-native"
import HomeNavigation from "../homeNavigation/HomeNavigation.jsx"

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigation} options={{
        headerShown: false,
        tabBarShowLabel: false,
        unmountOnBlur: true,
        tabBarIcon: ({focused})=>{
          return <Image source={icon.home} 
          style={{
            width:30, 
            height:30,
            opacity: focused ? 1 : 0.3
          }}/>
        }
      }}/>
      <Tab.Screen name="Appointments" component={Appointments} options={{
        headerTitleAlign: 'center',
        headerTitle: ()=>{
          return <Text style={styles.title}>Minhas Reservas</Text>
        },
        tabBarShowLabel: false,
        unmountOnBlur: true,
        tabBarIcon: ({focused})=>{
          return <Image source={icon.calendar} 
          style={{
            width:30, 
            height:30,
            opacity: focused ? 1 : 0.3
          }}/>
        }
      }}/>
      <Tab.Screen name="profile" component={Profile} options={{
        headerTitleAlign: 'center',
        headerTitle: ()=>{
          return <Text style={styles.title}>Meu Perfil</Text>
        },
        tabBarShowLabel: false,
        unmountOnBlur: true,
        tabBarIcon: ({focused})=>{
          return <Image source={icon.profile} 
          style={{
            width:30, 
            height:30,
            opacity: focused ? 1 : 0.3
          }}/>
        }
      }}/>
    </Tab.Navigator>
  )
}
export default TabNavigation
