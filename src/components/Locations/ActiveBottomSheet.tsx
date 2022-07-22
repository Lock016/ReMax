import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import { Property } from '../../interfaces/propertiesInterface'
import { ActiveDetails } from './ActiveDetails';

interface ActiveBottomSheetProps {
    activeData: Property;
}

export const ActiveBottomSheet = ({ activeData }: ActiveBottomSheetProps) => {
    const windowHeight = Dimensions.get('window').height;
    console.log("selectedMarker", activeData)
    return (
        <ScrollBottomSheet
            componentType="FlatList"
            snapPoints={[100, '50%', windowHeight - 200]}
            initialSnapIndex={1}
            renderHandle={() => (
                <View style={styles.header}>
                    <View style={styles.panelHandle} />
                </View>
            )}
            data={[activeData]}
            keyExtractor={(i) => (i.id).toString()}
            renderItem={(data) => (
                <ActiveDetails data={Object.values(data)[0]} />
            )}
            contentContainerStyle={styles.contentContainerStyle}
        />
    )
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 20,
    },
    panelHandle: {
        width: 41,
        height: 4,
        backgroundColor: '#E1E1E1',
        borderRadius: 17,
    },
});
