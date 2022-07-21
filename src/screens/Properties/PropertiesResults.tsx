import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components/ui/Header'
import { globalStyles } from '../../theme/globalTheme'
import PropertiesCard from '../../components/Properties/PropertiesCard'

import { useAppSelector } from '../../hooks';
import { ActivityLoader } from '../../components/ui/ActivityLoader'


const PropertiesResults = () => {

    const {properties, loading} = useAppSelector(state => state.properties)

    return(
        <SafeAreaView style={globalStyles.safeAreaContainer} >
            <Header
                backButton={true}
            />

            <View style={{ ...globalStyles.container, paddingHorizontal: 0}}>
                <Text style={{ ...globalStyles.title, paddingHorizontal: 20}}>Resultados</Text>
                {
                    loading ?
                    <ActivityLoader/>
                    :
                    <FlatList
                        data={properties}
                        keyExtractor={(item) => item.data.id.toString()}
                        renderItem={({ item }) => <PropertiesCard 
                            id={item.data.id}
                            title={item.data.address}
                            price={item.data.price}
                            image={item.images}
                            type={item.data.type}
                            item={item}
                        />}
                        showsVerticalScrollIndicator={false}
                    />
                }
            </View>

        </SafeAreaView>
    )
}

export default PropertiesResults

const styles = StyleSheet.create({})