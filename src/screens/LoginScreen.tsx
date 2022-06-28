import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const LoginScreen = () => {

    return (
        <View>
           <View style={styles.imageContainer}>
               <Image
                 source={require('./../assets/images/ReMax_Balloon.png')}
             />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'

    }
})