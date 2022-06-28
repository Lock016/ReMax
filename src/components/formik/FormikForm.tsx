import React, { FC, cloneElement } from 'react'
import { View, Text } from 'react-native'
import { Formik } from 'formik'

interface Props {
  children: JSX.Element;
}

export const FormikForm = (props: Props) => {

  return (
    <View>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
        {(data) => (React.cloneElement(props.children, { data }))}



      </Formik>
    </View>
  )
}