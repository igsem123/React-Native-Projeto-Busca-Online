import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
    },
    botao: {
        backgroundColor: '#8A07DA',
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '90%',
    },
    textoBotao: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    entrada: {
        borderWidth: 2,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginTop: 40,
        borderRadius: 8,
        height: 44,
        width: '90%',
    },
    imagemArea: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 130,
        borderRadius: 100,
        marginTop: -75,
        backgroundColor: '#fafafa',
    },
    imagem: {
        width: 120,
        height: 120,
        borderRadius: 60
    },
    logo: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        backgroundColor: '#EEEEEE'
    },
    fundo: {
        backgroundColor: '#EEEEEE',
        width: '100%',
        marginTop: 35,
    },
    textoNome: {
        fontSize: 21,
        fontWeight: '600',
        color: '#45565F',
        padding: 15
    },
    textoEmail: {
        fontSize: 17,
        color: '#717E84',
        marginTop: 5,
    },
    seguidoresArea: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    seguidores: {
        margin: 20,
        alignItems: 'center',
    },
    seguidoresNumero: {
        color: '#8A07DA',
        fontSize: 15,
    },
    seguidoresTexto: {
        color: '#95A8B2',
        fontSize: 13,
        marginTop: 5,
    },
    repositorios: {
        color: '#8A07DA',
        fontSize: 15,
        fontWeight: '400'
    },
    infoArea: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textoInfoArea: {
        color: '#8A07DA',
        fontSize: 17,
        fontWeight: '400',
        margin: 15,
    },
    areaInfo: {
        alignItems: 'center',
        color: '#95A8B2',
    },
    bioTexto: {
        justifyContent: 'center',
        textAlign: 'center'
    }
});

export default estilos;