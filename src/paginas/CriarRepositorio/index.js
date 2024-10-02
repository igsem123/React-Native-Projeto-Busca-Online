import React, { useState } from 'react';
import {Text, View, TouchableOpacity, TextInput, Alert, Image} from 'react-native';
import estilos from './estilos';
import logo from '../../assets/Git-Logo.png'
import {criarRepositoriosDoUsuario} from "../../servicos/requisicoes/repositorios";

export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    async function criar() {
        const resultado = await criarRepositoriosDoUsuario(
            route.params.id,
            nome,
            data
        )

        if (resultado === 'sucesso') {
            Alert.alert('Repositório criado com sucesso!');
            navigation.goBack();
        } else {
            Alert.alert('Erro ao criar o repositório!')
        }
    }

    return (
        <View style={estilos.container}>
            <Image source={logo} style={estilos.logo} />
            <Text style={estilos.titulo}>Novo Repositório:</Text>
            <TextInput
                placeholder="Nome do Repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de Criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity style={estilos.botao}
                onPress={criar}
            >
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
