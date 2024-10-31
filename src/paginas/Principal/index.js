import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView} from 'react-native';
import estilos from './estilos'
import { buscaUsuario } from "../../servicos/requisicoes/usuarios";
import logoImage from '../../assets/Git-Icon.png'

export default function Principal({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});

    async function busca(){
        if (!nomeUsuario.trim()) {
            Alert.alert('Por favor, insira um nome de usuário.');
            return;
        }

        const resultado = await buscaUsuario(nomeUsuario);
        console.log(resultado)

        setNomeUsuario('')
        if (resultado) {
            setUsuario(resultado);
        } else {
            Alert.alert('Usuário não encontrado!');
            setUsuario({});
        }
    }

    return (
        <ScrollView>
            <View style={estilos.container}>
                <Image source={logoImage} style={estilos.logo} />
                {
                    usuario?.login &&
                    <>
                        <View style={estilos.fundo}/>
                        <View style={estilos.imagemArea}>
                            <Image source={{ uri: usuario.avatar_url }} style={estilos.imagem} />
                        </View>
                        <Text style={estilos.textoNome}>{usuario.name}</Text>
                        { usuario?.bio &&
                            <Text style={estilos.bioTexto}>{usuario.bio}</Text>
                        }
                        { usuario?.email &&
                            <Text style={estilos.textoEmail}>{usuario.email}</Text>
                        }
                        <View style={estilos.infoArea}>
                            { usuario?.company &&
                                <View style={estilos.areaInfo}>

                                    <Text style={estilos.textoInfoArea}>{usuario.company}</Text>
                                    <Text style={estilos.areaInfo}>Empresa</Text>
                                </View>
                            }
                            { usuario?.location &&
                                <View style={estilos.areaInfo}>
                                    <Text style={estilos.textoInfoArea}>{usuario.location}</Text>
                                    <Text style={estilos.areaInfo}>Localidade</Text>
                                </View>
                            }
                        </View>
                        <View style={estilos.seguidoresArea}>
                            <View style={estilos.seguidores}>
                                <Text style={estilos.seguidoresNumero}>{usuario.followers}</Text>
                                <Text style={estilos.seguidoresTexto}>Seguidores</Text>
                            </View>
                            <View style={estilos.seguidores}>
                                <Text style={estilos.seguidoresNumero}>{usuario.following}</Text>
                                <Text style={estilos.seguidoresTexto}>Seguindo</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Repositorios', {login: usuario.login})}>
                            <Text style={estilos.repositorios}>
                                Ver os Repositórios
                            </Text>
                        </TouchableOpacity>
                    </>
                }

                <TextInput
                    placeholder="Busque por um Usuário"
                    autoCapitalize="none"
                    style={estilos.entrada}
                    value={nomeUsuario}
                    onChangeText={setNomeUsuario}
                />
                <TouchableOpacity style={estilos.botao} onPress={busca}>
                    <Text style={estilos.textoBotao}>
                        Buscar
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}
