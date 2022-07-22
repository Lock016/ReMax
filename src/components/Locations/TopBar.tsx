import React from 'react';
import { StyleSheet, View, GestureResponderEvent } from 'react-native';
import { Avatar } from './Avatar';
import { RefreshButton } from './RefreshButton';

type Props = {
    onPressElement: (event: GestureResponderEvent) => void;
};
export function TopBar({ onPressElement }: Props) {
    return (
        <View style={styles.container}>
            <RefreshButton onPressElement={onPressElement} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        top: 40,
        width: '100%',
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
});