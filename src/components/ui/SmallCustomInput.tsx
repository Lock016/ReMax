import { View, Text, TextInput, TextInputProps, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../../theme/globalTheme'
import { FormikErrors } from 'formik'
interface Props extends TextInputProps {
  label: string,
  errors: FormikErrors<string> | undefined,
  touched: boolean | undefined,
}


export const SmallCustomInput = ({ label, errors, touched, ...props }: Props) => {
  return (
    <View style={{width: '50%'}}>
      <Text style={globalStyles.inputLabel}>{label}</Text>
      <View style={{ ...globalStyles.inputContainer }}>
        <TextInput
          {...props}
        />
      </View>
      <Text style={styles.inputError}>{errors && touched && errors}</Text>
      
     
    </View>
  )
}

const styles = StyleSheet.create({
  inputError: {
    marginTop: 10, 
    fontSize: 16, 
    color: 'red', 
    fontFamily: 'GothamBold',
    marginBottom: 10,
  }
});
