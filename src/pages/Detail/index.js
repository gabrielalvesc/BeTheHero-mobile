import React from 'react';
import {
    View, Text, TouchableOpacity, Image
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import FeatherIcon from 'react-native-vector-icons/Feather';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail() {

    const navigation = useNavigation();

    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha Atropelada" com o valor de R$ 120,00';

    function navigateToIncidents() {
        navigation.navigate('Incidents');
    }

    function sendMail() {
        // MailCompose.composeAsync({
        //     subject: 'Héroi do caso: Cadelinha Atropelada',
        //     recipients: ['alvesc.gabriel14@gmail.com'],
        //     body: message
        // });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5583981343105&text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Image source={logoImg} />
                <TouchableOpacity style={styles.backButton} onPress={navigateToIncidents} >
                    <FeatherIcon name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]} >ONG:</Text>
                <Text style={styles.incidentValue} >APAD</Text>

                <Text style={styles.incidentProperty} >CASO:</Text>
                <Text style={styles.incidentValue} >Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty} >VALOR:</Text>
                <Text style={styles.incidentValue} >R$ 120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle} >Salve o dia!</Text>
                <Text style={styles.heroTitle} >Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription} >Entre em contato.</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-Mail</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}