import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {colors} from '../utils/colors'
import {spacing, fontSizes} from '../utils/sizes'


import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    
  },
  textInput: {
    flex: 1,
    marginRight : spacing.sm,
     fontSize: 13,
  },
  button: {
    justifyContent: 'center',
  },
  inputcontainer: {
    padding: spacing.lg,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
