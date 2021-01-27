import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { View,StyleSheet,Text, Button } from 'react-native';
import * as deleteContact from '../store/actions/deleteContact';
import { Entypo } from '@expo/vector-icons';

const profileInfo = props =>{
    let name = ''
    let email=''
    let phoneNo=''
    const contactList = useSelector(state=>state.search.fullList)
    const contact_id = props.route.params.id;
    const display_list = contactList.find(pointer=>pointer.id===contact_id)
    if(display_list)
    {
         name=display_list.name,
         email=display_list.email,
         phoneNo=display_list.phoneNo
    }
    const dispatch = useDispatch();
    return(
        <View>
        <Entypo name="user" size={74} color="black" style={styles.userContainer} />
        <View style={styles.profileContainer}>
         <Text style={styles.inputContainer}>Name:  {name}</Text>
         <Text style={styles.inputContainer}>Email:  {email}</Text>
         <Text style={styles.inputContainer}>PhoneNo:  {phoneNo}</Text>
        </View>
        <View style={styles.buttonContainer}>
        <Button title='Delete' onPress={()=>{ dispatch(deleteContact.deleteContact(contact_id)),
        props.navigation.goBack()}}/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer:{
        margin:20,
        backgroundColor:'#f0f8ff',
    },
    userContainer:{
        marginTop:20,
        marginBottom:50,
        alignSelf:"center",
    },
    buttonContainer:{
        margin:50,
    },
    inputContainer:{
        padding:15,
    }
});
export default profileInfo;