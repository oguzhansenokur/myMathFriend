import {View, Text, StyleSheet, Touchable} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    width: '25%',
    height: '20%',
  },
  inner: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    paddingRight: 19,
    paddingBottom: 25,
    paddingLeft: 19,
  },
  middleInner: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1FABF7',
    borderRadius: 5,
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 36,
    color: '#FFFFFF',
  },
});

export default function CalcButton({
  operationText,
  setOperationText,
  setOperationHistory,
  operationHistory,
  setLastOperation
}) {
  const handleClick = () => {
    let calcstr = operationText?.replace(/[^-()\d/*+.]/g, '');
    try {
      setOperationText(eval(calcstr));
        let newHistory=[...operationHistory, operationText]
        setOperationHistory(newHistory)
        setLastOperation(operationText)
        console.log(operationHistory)
    } catch (e) {
      if (e instanceof SyntaxError) {
        null;
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClick} style={styles.inner}>
        <View style={styles.middleInner}>
          <Text style={styles.label}>=</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
