import React from 'react';
import { StyleSheet, Image, Pressable, GestureResponderEvent } from 'react-native';

type Props = {
    onPressElement: (event: GestureResponderEvent) => void;
};

export const RefreshButton = ({ onPressElement }: Props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#FAFAFA' : 'white',
                },
                styles.container,
            ]}
            onPress={onPressElement}
        >
            <Image source={require('../../assets/images/refresh.png')} style={styles.image} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 36,
        width: 36,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '70%',
        width: '70%',
    },
});