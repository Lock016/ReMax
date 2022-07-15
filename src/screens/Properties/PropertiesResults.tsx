import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components/ui/Header'
import { globalStyles } from '../../theme/globalTheme'
import PropertiesCard from '../../components/Properties/PropertiesCard'
import { propertiesInterface } from '../../interfaces/propertiesInterface'
import { data } from '../../data/propertiesExample'

const PropertiesResults = () => {

   

   
    


    return(
        <SafeAreaView style={globalStyles.safeAreaContainer} >
            <Header/>
            <View style={{ ...globalStyles.container, paddingHorizontal: 0}}>
                <Text style={{ ...globalStyles.title, paddingHorizontal: 20}}>Resultados</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <PropertiesCard 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        type={item.type}
                    />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

export default PropertiesResults

const styles = StyleSheet.create({})