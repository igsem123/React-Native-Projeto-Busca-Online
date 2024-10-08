import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import {
    atualizarRepositoriosDoUsuario, deletarRepositoriosDoUsuario,
} from "../../servicos/requisicoes/repositorios";

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);
    console.log(route.params);

    async function salvar() {
        const resultado = await atualizarRepositoriosDoUsuario(
            nome,
            data,
            route.params.item.postId,
            route.params.item.id
        );

        if (resultado === 'sucesso') {
            Alert.alert("Repositório atualizado com sucesso!");
            navigation.goBack();
        } else {
            Alert.alert("Erro ao atualizar o repositório!")
        }
    }

    async function deletar() {
        const resultado = await deletarRepositoriosDoUsuario(route.params.item.id);

        if (resultado === 'sucesso') {
            Alert.alert('Repositório deletado com sucesso!')
            navigation.goBack();
        } else {
            Alert.alert("Erro ao deletar o repositório!")
        }
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Atualize as Informações do Repositório:</Text>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity 
                style={estilos.botao}
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]}
                onPress={deletar}
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
