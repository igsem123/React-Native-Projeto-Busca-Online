import React, { useEffect, useState } from 'react';
import {Text, View, FlatList, TouchableOpacity, TextInput, Alert, Image, ScrollView} from 'react-native';
import {VStack, Box} from '@react-navigation/native';
import estilos from './estilos';
import {buscaRepositorios, pegarRepositoriosDoUsuario} from "../../servicos/requisicoes/repositorios";
import {useIsFocused} from "@react-navigation/native";
import logoImage from '../../assets/Git-Logo.png'

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const estaNaTela = useIsFocused();
    const [nomeRepositorio, setNomeRepositorio] = useState('');

    useEffect(() => {
        async function carregarRepositorios() {
            const resultado = await pegarRepositoriosDoUsuario(route.params.id);
            if (resultado && Array.isArray(resultado)) {
                setRepo(resultado);
            } else {
                setRepo([]);  // Lidar com erro ou resultado vazio
            }
        }
        carregarRepositorios();
    }, [estaNaTela]);

    async function busca() {
        if (!nomeRepositorio.trim()) {
            Alert.alert('Por favor, insira um nome de repositório.');
            return;
        }

        const resultado = await buscaRepositorios(nomeRepositorio.trim());
        setNomeRepositorio('');  // Limpar o campo de busca após a tentativa

        if (resultado) {
            setRepo(resultado);  // Atualizar a lista com o resultado da busca
        } else {
            Alert.alert('Repositório não encontrado!');
        }
    }

    return (
        <View style={estilos.container}>
            <Image source={logoImage} style={estilos.logo} />
            <Text style={estilos.repositoriosTexto}>{repo.length} Repositórios Criados</Text>

            <TextInput
                placeholder="Busque por um Repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nomeRepositorio}
                onChangeText={setNomeRepositorio}  // Usando o estado correto
            />
            <TouchableOpacity style={estilos.botao} onPress={busca}>
                <Text style={estilos.textoBotao}>Buscar</Text>
            </TouchableOpacity>

            <Text style={estilos.repositoriosTexto}>Criar um Novo Repositório</Text>

            <TouchableOpacity
                style={estilos.botao}
                onPress={() => navigation.navigate('CriarRepositorio', {id: route.params.id})}
            >
                <Text style={estilos.textoBotao}>Adicionar Novo Repositório</Text>
            </TouchableOpacity>

            <FlatList
                data={repo}
                style={{ width: '100%', marginTop: 25 }}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={estilos.repositorio}
                        onPress={() => navigation.navigate('InfoRepositorio', { item })}
                    >
                        <Text style={estilos.repositorioNome}>{item.name}</Text>
                        <Text style={estilos.repositorioData}>Atualizado em {item.data}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
