import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./login.style.js";
import Button from "../../components/button/button.jsx";
import { useContext, useState } from "react";
import api from "../../constants/api.js";
import {AuthContext} from '../../contexts/auth.js'

function Login(props) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {setUser}= useContext(AuthContext)

    const ExecuteLogin = async()=> {
        try {
            const res = await api.post("/users/login", {
                email,
                password
            })

            if(res.data){
                api.defaults.headers.common['Authorization'] = "Bearer "+ res.data.token
                setUser(res.data);
            }
        } catch (error) {
            if(error.response?.data.error)
                Alert.alert(error.response.data.error)
            else
                Alert.alert('Ocorreu um erro. Tente novamente mais tarde')
        }
    }

    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </View>

        <View>
            <View style={styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input} 
                onChangeText={(text)=>{setEmail(text)}}/>
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true} 
                    onChangeText={(text)=>{setPassword(text)}}/>
                    
            </View>
            <Button text="Acessar" action={ExecuteLogin}/>
        </View>

        <View style={styles.footer}>
            <Text>Não tenho conta. </Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate('account')}>
                <Text style={styles.footerLink}
                >Criar conta agora.
                </Text>
            </TouchableOpacity>
        </View>

    </View>
}

export default Login;