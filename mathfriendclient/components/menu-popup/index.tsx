import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Index = ({visiblity}) => {
    
    const styles = StyleSheet.create({
        container:{position:'absolute',display:'none',marginTop:'11%',marginLeft:17,width:'50%',height:'56%',backgroundColor:'white',borderRadius:5,paddingTop:18,paddingRight:31,paddingBottom:14,paddingLeft:19},
        menuText:{fontSize:12}
    })
  return (
    <View style={styles.container}>
      <Text style={styles.menuText}>Index</Text>
    </View>
  )
}

export default Index