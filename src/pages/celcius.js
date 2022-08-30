import React, {useState} from "react";  

import {View, 
        Text,
        TextInput,
        StyleSheet,
        TouchableOpacity,
     } from 'react-native';


     export default function Celcius(){

        let [temp,setTemp] = useState();
        let [total, setTotal] = useState();

            function CalcularTotal(){
                let resultado = (9 * parseFloat(temp) + 160) /5;
                setTotal(resultado);

                alert("A temperatura em Fahrenheit: " + total);

            }
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Celcius</Text>

                <TextInput onChangeText={setTemp} style={styles.campo} placeholder="Digite a temperatura de Celcius" />

                <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
                    <Text style={styles.botaoTexto}>Calcular</Text>
                </TouchableOpacity>
            </View> 
        );
     }

     const styles = StyleSheet.create({
            container: { 
            backgroundColor: '#3B3936',
            flex: 1,  
            justifyContent: 'center',
            alignItems: 'center',
     },

     titulo: { 
        fontSize: 25,
        color: '#FFF',
        fontWeight:'bold',
        marginBottom:40
     },

     campo:{
        backgroundColor: '#FFF',
        fontSize: 18,
        padding: 8,
        marginTop: 10,
        width: 300,
        marginBottom:10,
        borderRadius: 10
     },

     botao:{
        backgroundColor: 'red',
        alignItems: "center",
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        width: 250
     },

     botaoTexto:{
        color: '#FFF',
        fontSize: 17,
        fontWeight: "700",
     }
    });