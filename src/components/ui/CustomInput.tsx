import { View, Text, TextInput, TextInputProps, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../../theme/globalTheme'
import { FormikErrors } from 'formik'
interface Props extends TextInputProps {
  label: string,
  errors: FormikErrors<string> | undefined,
  touched: boolean | undefined,
  bigger?: boolean,
  margin?: number,
}


export const CustomInput = ({ label, errors, touched, bigger, margin=0, ...props  }: Props) => {
  return (
    <View style={{marginHorizontal: margin}}>
      <Text style={globalStyles.inputLabel}>{label}</Text>
      <View style={{
        ...globalStyles.inputContainer,
        height: bigger ? 150 : 50,
      }}>
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
