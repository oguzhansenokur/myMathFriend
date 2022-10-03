import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { TextInput } from 'react-native-gesture-handler'
import  KeyboardSelector  from '../../components/keyboard-selector'
import Button from '../../components/button/Button';
import { functionsOne, Numbers ,Operations } from '../../utils/helper'
import ValueBox from '../../components/value-box'

const styles = StyleSheet.create(
    {
        container:{
            width:'100%',height:'100%'
        }
        ,top: {
            width: '100%',
            height: '30%',
            backgroundColor: 'red',
            paddingLeft: 17,
            paddingTop: 10,
            paddingRight: 18,
            paddingBottom: 17,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
          bottom: {
            width: '100%',
            height: '70%',
            display: 'flex',
            alignItems:'center'            
          },
          topHeader: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems:'center'
        },
          title: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
          },
          topContent:{
            paddingTop:15,
            paddingBottom:15,
            width:'100%',
            height:'100%'
          },
          textStyle:{
      
            width:'100%',
            height:'100%',
            borderColor:'white',
            textAlignVertical:'top',
            fontSize:22,
            color:'white'
          },
          keyboardSelector:{
            
            height:70,
            width:'92%',
            marginTop:6,
            backgroundColor:'#314C9E',
            borderRadius:5,
            paddingTop:7,
            paddingLeft:6,
            paddingBottom:10,
            paddingRight:6,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
          

          },
          keypad:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            
          }
      
        
    }
)

const FormulaStorage = ({navigation}) => {
  const [selectedKeyboard,setSelectedKeyboard]=React.useState('F2')
  const [operationText,setOperationText] = React.useState('');

  return (
    <SafeAreaView>
    <View style={styles.container} >
        <LinearGradient 
          colors={['#18CFFB', '#2DA4FF']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.top}
        >
    <View style={styles.topHeader}>
            <TouchableOpacity onPress={()=>{navigation.toggleDrawer()}} >
              <Image source={require('../../Icons/dotted.png')} />
            </TouchableOpacity>
            <Text style={styles.title}> Formula Storage </Text>
            <TouchableOpacity onPress={()=>{navigation.toggleDrawer()}} >
              <Image  source={require('../../Icons/tick.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.topContent} >
            <TextInput showSoftInputOnFocus={false} multiline={true} numberOfLines={5} style={styles.textStyle} value={operationText}/>
          </View>
        </LinearGradient>
        <View style={styles.bottom} >
            <View style={styles.keyboardSelector} >
            <KeyboardSelector text='Nu' selectedType={selectedKeyboard} setSelectedType={setSelectedKeyboard} />
            <KeyboardSelector text='F1' selectedType={selectedKeyboard} setSelectedType={setSelectedKeyboard} />
            <KeyboardSelector text='F2' selectedType={selectedKeyboard} setSelectedType={setSelectedKeyboard}  />
            <KeyboardSelector text='Va' selectedType={selectedKeyboard} setSelectedType={setSelectedKeyboard}  />
            <KeyboardSelector text='<-'   variant='del' operationText={operationText}  setOperationText={setOperationText}/>

            </View>
            <View style={styles.keypad}>
            {selectedKeyboard === 'Nu' ? Numbers.map(item => <Button key={item.id} variant='' text={item.text} operationText={operationText} setOperationText={setOperationText} />):
            selectedKeyboard === 'F1' ? functionsOne.map(item=> <Button key={item.id} variant='' text={item.text} size='small' operationText={operationText} setOperationText={setOperationText}   />):
            selectedKeyboard === 'F2' ? Operations.map(item =>  <Button key={item.id} variant='' text={item.text} size='small' operationText={operationText} setOperationText={setOperationText}   />):
            selectedKeyboard === 'Va' ? <ValueBox/>:
            Numbers.map(item => <Button key={item.id} variant='' text={item.text} operationText={operationText} setOperationText={setOperationText} />)
            
            }

            </View>

        </View>
    </View>
    </SafeAreaView>
  )
}

export default FormulaStorage