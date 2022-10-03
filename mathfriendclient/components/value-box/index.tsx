import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    height: 93,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    overflow:'hidden'
  },
  buttonContainer: {
    width: 51,
  },
  opacityStyle: {width: '100%'},
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#314C9E',
    width: 51,
    height:23,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  valueContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 70,
    backgroundColor: '#314C9E',
    borderRadius: 3,
    flexWrap:'nowrap',
    justifyContent:'flex-start',
    paddingTop:9,
    paddingBottom:9,
    
  },
  valueBorder: {
    backgroundColor:'white',
    marginHorizontal:7,
    padding:8,
    minWidth:41,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5

  },
  textStyle:{fontSize:18, color:'white'},
  valueText:{fontSize:20}
});

const ValueBox = () => {
  return (
    <View style={styles.container}>
      <View styles={styles.buttonContainer}>
        <TouchableOpacity style={styles.opacityStyle}>
          <View style={styles.buttonStyle}>
            <Text style={styles.textStyle}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.valueContainer}>
        <ScrollView horizontal={true}> 
        <View style={styles.valueBorder}>
          <Text style={styles.valueText}>x</Text>
        </View>
        <View style={styles.valueBorder}>
          <Text style={styles.valueText}>asdasd</Text>
        </View>
        <View style={styles.valueBorder}>
          <Text style={styles.valueText}>asdasd</Text>
        </View>
        <View style={styles.valueBorder}>
          <Text style={styles.valueText}>asdasd</Text>
        </View>
        <View style={styles.valueBorder}>
          <Text style={styles.valueText}>asdasd</Text>
        </View>
        <View style={styles.valueBorder}>
          <Text style={styles.valueText}>asdasd</Text>
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ValueBox;
