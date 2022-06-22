import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;

const SplashScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
            }}
        >
            <Image
                source={require('./../assets/images/splash.png')}
                style={styles.image}
            />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    image: {
        width: windowWidth - 20,
        maxHeight: 67,
        alignSelf: 'center',
    },
});
