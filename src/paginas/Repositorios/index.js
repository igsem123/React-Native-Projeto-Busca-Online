import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import { pegarRepositoriosDoUsuario } from "../../servicos/requisicoes/repositorios";
import {useIsFocused} from "@react-navigation/native";

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const estaNaTela = useIsFocused();

    useEffect(() => {
        async function carregarRepositorios() {
            const resultado = await pegarRepositoriosDoUsuario(route.params.id);
            setRepo(resultado);
        }
        carregarRepositorios();
    }, [estaNaTela])

    return (
        <View style={estilos.container}>
            <Text style={estilos.repositoriosTexto}>{repo.length} Repositórios Criados</Text>
            <TouchableOpacity
                style={estilos.botao}
                onPress={() => navigation.navigate('CriarRepositorio')}
            >
                <Text style={estilos.textoBotao}>Adicionar Novo Repositório</Text>
            </TouchableOpacity>

            <FlatList data={repo}
                      style={{width: '100%'}}
                      keyExtractor={repo => repo.id}
                      renderItem={({item}) => (
                          <TouchableOpacity
                              style={estilos.repositorio}
                              onPress={() => navigation.navigate('InfoRepositorio', {item})}>
                              <Text style={estilos.repositorioNome}>{item.name}</Text>
                              <Text style={estilos.repositorioData}>Atualizado em {item.data}</Text>
                          </TouchableOpacity>
                      )}
            />
        </View>
    );
}
