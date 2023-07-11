import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const InpuText = ({
  placeholder,
  keyboardType,
  placeholderTextColor,
  onChangeText,
  value,
  editable,
  secureTextEntry,
  maxlength,
  multiline,
  numberOfLines,
  errorText,
  style,
}: any) => {
  const ref = useRef(null);
  return (
    <View>
      <TextInput
        //   ref={_ref => {
        //     ref.current = _ref;
        //   }}
        style={style}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        value={value}
        editable={editable}
        secureTextEntry={secureTextEntry}
        maxLength={maxlength}
        numberOfLines={numberOfLines}
        multiline={multiline}
      />
      {errorText?.length > 0 && (
        <Text style={styles.errorText}>{errorText}</Text>
      )}
    </View>
  );
};
export default InpuText;

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: RFValue(16),
  },
});
