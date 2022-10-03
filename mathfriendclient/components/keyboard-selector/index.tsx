import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const KeyboardSelector = ({
  text = 'Text',
  variant = 'key',
  selectedType,
  setSelectedType,
  operationText,
  setOperationText,
}) => {
  const keyboardSelectorHandle = () => {
    setSelectedType(text);
  };
  const deleteHandler = () => {
    let typeText = String(operationText);
    setOperationText(typeText.slice(0, -1));
  };
  const clearText = () => {
    setOperationText('');
  };

  return (
    <TouchableOpacity
      onLongPress={variant === 'del' ? clearText : null}
      onPress={variant === 'del' ? deleteHandler : keyboardSelectorHandle}
      style={styles.button}>
      <View
        style={[
          styles.container,
          text === selectedType
            ? {backgroundColor: '#18CFFB'}
            : {backgroundColor: '#314C9E'},
          variant === 'del'
            ? {backgroundColor: '#E77331', marginTop: 3, width: 65}
            : {width: 47},
        ]}>
        <Text style={styles.title}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default KeyboardSelector;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 36,
    color: 'white',
  },
});
