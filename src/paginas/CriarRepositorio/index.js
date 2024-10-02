import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';

export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Novo Repositório:</Text>
            <TextInput
                placeholder="Nome do Repositório"
                autoCapitalize="none"
                style={estilos.entrada}
            />
            <TextInput
                placeholder="Data de Criação"
                autoCapitalize="none"
                style={estilos.entrada}
            />
            <TouchableOpacity style={estilos.botao}>
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
