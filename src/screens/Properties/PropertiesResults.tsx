import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components/ui/Header'
import { globalStyles } from '../../theme/globalTheme'
import PropertiesCard from '../../components/Properties/PropertiesCard'
import { propertiesInterface } from '../../interfaces/propertiesInterface'
import { data } from '../../data/propertiesExample'
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
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <PropertiesCard 
                            id={item.id}
                            title={item.name}
                            price={item.price}
                            image={item.images[0]}
                            type={item.type}
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