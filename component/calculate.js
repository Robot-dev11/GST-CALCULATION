import React ,{useState} from 'react';
import { StyleSheet,View,TouchableOpacity,Text } from 'react-native';


export default function Calculate() {
  

  return (
    <View style={styles.container}>
         <TouchableOpacity
          style={styles.customBackground}
          onPress={() => {}} 
        >
          <Text style={styles.custom}>Calculate</Text>
        </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create ({
  container : {
    width :100,
    marginTop:50,
    marginHorizontal:140,
    
  },
  custom: {
    fontSize:20,
    fontWeight:'100',
    color: "#fff",
},
  customBackground: {
    backgroundColor: 'blueviolet',
    borderRadius:20,
    width:200,
    paddingLeft:50,
    paddingRight:50,
    paddingBottom:10,
    paddingTop:10,
    marginLeft:-40,
  }
});