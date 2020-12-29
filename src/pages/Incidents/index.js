import React, { useEffect, useState } from 'react';
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
import BaseService from '../../services/service';

import logoImg from '../../assets/logo.png';

export default function Incidents() {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        getIncidents()
    }, [])

    function navigateTo(incident) {
        navigation.navigate('Detail', { incident });
    }

    async function getIncidents() {

        if(loading) {
            return;
        }

        if(totalRecords > 0 && data.length === totalRecords) {
            return;
        }

        setLoading(true)
        const params = {
            page: currentPage
        }
        const response = await BaseService.getAll('incidents/all', params);
        setData([...data, ...response.data.items]);
        setTotalRecords(response.data.totalRecords);
        setCurrentPage(currentPage + 1);
        setLoading(false)
    }

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Image source={logoImg} />
                <Text style={styles.headerText} >
                    Total de <Text style={styles.headerTextBold}>{totalRecords === 1 ? `${totalRecords} caso` : `${totalRecords} casos` }</Text>.
                </Text>
            </View>

            <Text style={styles.title} >Bem-vindo!</Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve um dia.
            </Text>

            <FlatList style={styles.incidentsList}
                data={data}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={true}
                onEndReached={getIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident} >
                        <Text style={styles.incidentProperty} >ONG:</Text>
                        <Text style={styles.incidentValue} >{ incident.name }</Text>

                        <Text style={styles.incidentProperty} >CASO:</Text>
                        <Text style={styles.incidentValue} >{ incident.title }</Text>

                        <Text style={styles.incidentProperty} >VALOR:</Text>
                        <Text style={styles.incidentValue} >{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value) }</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={() => navigateTo(incident)} >
                            <Text style={styles.detailsButtonText} >Ver mais detalhes</Text>
                            <FeatherIcon name="arrow-right" size={16} color="#e02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );
}