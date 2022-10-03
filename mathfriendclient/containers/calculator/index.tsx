import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/button/Button';
import {BUTTONS} from '../../utils/helper';
import CalcButton from '../../components/calcbutton';
import  MenuPopup  from '../../components/menu-popup';


const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
  top: {
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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dottedIconButton: {},
  topHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: '32%',
  },
  topNumber: {fontSize: 20, color: 'white', alignSelf: 'flex-end'},
  result1: {fontSize: 36, color: 'white', alignSelf: 'flex-end'},
  result2: {fontSize: 29, color: 'white', alignSelf: 'flex-end'},
  result3: {fontSize: 26, color: 'white', alignSelf: 'flex-end'},

  topContent: {
    alignSelf: 'flex-end',
  },
  textOverflow: {
    overflow: 'visible',
    display: 'flex',
    flexWrap: 'wrap',
  },
});


export const Calculator = ({navigation}) => {
  const [operationText, setOperationText] = React.useState('');
  const [operationHistory, setOperationHistory] = React.useState([]);
  const [lastOperation,setLastOperation]=React.useState('');
  const [visiblity,setVisiblity]=React.useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <LinearGradient
          colors={['#18CFFB', '#2DA4FF']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.top}>
          <View style={styles.topHeader}>
            <TouchableOpacity onPress={()=>{navigation.toggleDrawer()}} style={styles.dottedIconButton}>
              <Image source={require('../../Icons/dotted.png')} />
            </TouchableOpacity>
            <Text style={styles.title}> Calculator </Text>
          </View>
          <MenuPopup visiblity={visiblity}/>

          <View style={styles.topContent}>
            <View>
              <Text style={styles.topNumber}>
                {lastOperation?.length>=11 ? lastOperation.slice(0,8)+'...': lastOperation}
              </Text>
              <View style={styles.textOverflow}>
                <Text
                  style={
                    operationText?.length >= 16 && operationText?.length < 21
                      ? styles.result2
                      : operationText?.length < 16
                      ? styles.result1
                      : operationText?.length >= 21
                      ? styles.result3
                      : styles.result1
                  }>
                  {operationText}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.bottom}>
          {BUTTONS.map((item, key) => (
            <Button
              key={item.id}
              text={item.text}
              variant={item.variant}
              operationText={operationText}
              setOperationText={setOperationText}
            />
          ))}
          <CalcButton
            operationText={operationText}
            setOperationText={setOperationText}
            operationHistory={operationHistory}
            setOperationHistory={setOperationHistory}
            setLastOperation={setLastOperation}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
