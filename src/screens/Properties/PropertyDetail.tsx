import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import { globalStyles } from '../../theme/globalTheme'
import { Header } from '../../components/ui/Header';  
import React from 'react'

interface Props {
    id: number
}

const PropertyDetail = ({ id }: Props) => {
    return(
        <SafeAreaView style={ globalStyles.safeAreaContainer}>
            <Header/>
            <ScrollView style={{ ...globalStyles.container, marginVertical: 0}} showsVerticalScrollIndicator={false}>
                <Text style={{ ...globalStyles.title, marginTop: 15}}>Pelícano 424 Real del Mezquital</Text>
                <View>
                    <Image
                        source={{
                            uri: 'https://media.istockphoto.com/vectors/vector-illustration-of-red-house-icon-vector-id155666671?k=20&m=155666671&s=612x612&w=0&h=sL5gRpVmrGcZBVu5jEjF5Ne7A4ZrBCuh5d6DpRv3mps='
                        }}
                        style={{ width: 270, height: 270, marginVertical: 30,}}
                    />
                </View>
                <Text style={ styles.detailsTitles}>CASA EN VENTA</Text>
                <Text style={ styles.detailsTexts }>$1,000,000</Text>
                <Text style={ styles.detailsTitles}>Descripción</Text>
                <Text style={ styles.detailsTexts }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore mollitia consequatur facilis amet odio cupiditate, reprehenderit ducimus? Distinctio illum reprehenderit praesentium dolores officiis quia, in possimus earum aut voluptatum.</Text>
                <Text style={ styles.detailsTitles}>Detalles</Text>
                <Text style={ styles.detailsTexts }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sequi dolorem nisi nobis labore asperiores aspernatur magnam dolore harum, ipsa sit animi sapiente cumque eveniet, voluptate consectetur pariatur incidunt modi!</Text>
                <Text style={ styles.detailsTitles}>Areas</Text>
                <Text style={ styles.detailsTexts }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi rem commodi illum dolores eligendi maiores eos nobis corporis exercitationem fugiat illo est delectus at, in quibusdam dolorum temporibus, molestiae autem.</Text>
                <Text style={ styles.detailsTitles}>Equipo</Text>
                <Text style={{ ...styles.detailsTexts, marginBottom: 15 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi rem commodi illum dolores eligendi maiores eos nobis corporis exercitationem fugiat illo est delectus at, in quibusdam dolorum temporibus, molestiae autem.</Text>

            </ScrollView>
        </SafeAreaView>
    )
}

export default PropertyDetail

const styles = StyleSheet.create({
    detailsTitles: {
        fontSize: 18,
        fontFamily: 'Gotham-Bold',
        color: '#003DA5',
        marginTop: 10,
        marginBottom: 10
    },
    detailsTexts: {
        fontSize: 16,
        fontFamily: 'GothamBook',
        color: '#000',
        textAlign: 'justify',
    }
})