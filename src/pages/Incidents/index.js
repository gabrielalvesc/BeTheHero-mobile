import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import FeatherIcon from 'react-native-vector-icons/Feather';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents() {

    const navigation = useNavigation();

    function navigateTo() {
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Image source={logoImg} />
                <Text style={styles.headerText} >
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>

            <Text style={styles.title} >Bem-vindo!</Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve um dia.
            </Text>

            <FlatList style={styles.incidentsList}
                data={[1, 2, 3, 4, 5]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident} >
                        <Text style={styles.incidentProperty} >ONG:</Text>
                        <Text style={styles.incidentValue} >APAD</Text>

                        <Text style={styles.incidentProperty} >CASO:</Text>
                        <Text style={styles.incidentValue} >Cadelinha atropelada</Text>

                        <Text style={styles.incidentProperty} >VALOR:</Text>
                        <Text style={styles.incidentValue} >R$ 120,00</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={navigateTo} >
                            <Text style={styles.detailsButtonText} >Ver mais detalhes</Text>
                            <FeatherIcon name="arrow-right" size={16} color="#e02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );
}