import React from 'react';
import {View, Text} from 'react-native';

const VisibleText = () =>{
    return(
        //view is very important component in react-native
        <View style = {{flex : 1}}>
         <View style = {{backgroundColor:"#8a2be2" , flex : 1}}>
             <Text style = {{color : "white", textAlign : "center", marginTop : 400 , fontSize : 50}}>
                 GST CALCULATION
             </Text>
         </View>
         </View>   
    )
    // in this file we are implementing nested view in a javascript file
    
}

export default VisibleText;