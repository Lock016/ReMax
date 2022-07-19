import {ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react'

export const ActivityLoader = () => {
  return (
    <ActivityIndicator
        style={styles.activityIndicator}
        size={50}
        color="red"
    />
  )
}

const styles = StyleSheet.create({
    activityIndicator : {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999
    }
});

