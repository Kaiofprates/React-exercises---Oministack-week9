import React, {useState}from 'react';
import {Alert, TextInput, StyleSheet, SafeAreaView, AsyncStorage,TouchableOpacity, Text} from 'react-native';
import api from '../server/api';

export default function Book({navigation}){
const id = navigation.getParam('id')
const [date, setDate] = useState('');

 async function handleSubmit(){
 const user_id = await AsyncStorage.getItem('user');
 await api.post(`/spots/${id}/bookings`,{
     date
 },{
     headers: {
         user_id
     }
 });

 Alert.alert('Solicitação de reserva enviada.');

 navigation.navigate('List');
 
}

function handleCancel(){
    navigation.navigate('List');

}


    return (
    
    <SafeAreaView
    style={styles.container}
    >
   <Text
   style={styles.label}
   >DATA DE INTERESSE *</Text>
   <TextInput
   style={styles.input}
   placeholder="Qual data você quer reservar?"
   placeholderTextColor="#999"
   autoCapitalize="words"
   autoCorrect={false}
   value={date}
   onChangeText={setDate}
>
   </TextInput>
   <TouchableOpacity 
     style={styles.button}
     onPress={handleSubmit}
     >
     <Text style={styles.buttonText}>
         Solicitar reserva
     </Text>
     </TouchableOpacity>
     <TouchableOpacity 
     style={styles.cancelButton}
     onPress={handleCancel}
     >
     <Text style={styles.buttonText}>
         Cancelar 
     </Text>
     </TouchableOpacity>
    </SafeAreaView>
    
    
    );
}

const styles = StyleSheet.create({
    container:{
    margin: 30,
    marginTop: 50,
    },
    label: {
        fontWeight: 'bold',
        color: "#444",
        marginBottom: 8,
        marginTop: 20,
    },
    form: {
        alignSelf:'stretch',
        paddingHorizontal: 30,
        marginTop: 30,

    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16, 
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
    },
    button:{
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    cancelButton:{
        height: 42,
        backgroundColor: '#CCC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 10,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
});