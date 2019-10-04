import React, {useState, useEffect}from 'react';
import {View, SafeAreaView,ScrollView, AsyncStorage,StyleSheet, Image, Text} from 'react-native';
import logo from '../../assets/logo.png';
import SpotList from '../components/SpotList';

export default function List(){
    const [techs, setTechs] = useState([]);
    
    useEffect(()=>{
    AsyncStorage.getItem('techs').then(storageTechs =>{
   const techsArray  = storageTechs.split(',').map(tech => tech.trim());
   setTechs(techsArray);

    });
    },[]);

    return <SafeAreaView sytle={styles.container}>
   
        <Image 
        style={styles.logo}
        source={logo}></Image>
        <ScrollView>
        {techs.map(tech =>  <SpotList key={tech} tech={tech}></SpotList>)}
        </ScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    logo:{
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10,

    }
    
})