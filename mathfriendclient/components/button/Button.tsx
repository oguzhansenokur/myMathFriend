import { View, Text, StyleSheet, Touchable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function Button ({text,variant,operationText,setOperationText,size=''})  {

    const screenTyper=(value)=>{
        if(value==='C')
        {
          setOperationText('');
        }
        else if(value==='<-')
        {
          let typeText=String(operationText);
            setOperationText(typeText.slice(0,-1))
        }
        else{
          var typeText=operationText;
          typeText+=value
          setOperationText(typeText)
        }
    
       
      }

    const styles = StyleSheet.create({
        buttonContainer:{
            width:'25%',
            height:'20%',
            display:'flex',
            alignItems:'center',
            paddingTop:30,

          
        },
        labelButton:{
            fontSize:36
        }
    })


  return (

    <View style={styles.buttonContainer}>
    <TouchableOpacity style={{width:'100%',height:'100%'}} onPress={()=>screenTyper(text)} >

      <Text style={[styles.labelButton,variant==='clear' ? {color:'#E77331'} : variant==='operator' ? {color:'#1FABF7'} : size==='small' ? {fontSize:24,color:'black'} : {color:'black'}    ]}>{text}</Text>
      </TouchableOpacity>

    </View>


  )
}

  