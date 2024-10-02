import { StyleSheet } from 'react-native';


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        backgroundColor: '#8A07DA',
        marginTop: 50,
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
        marginTop: 20,
        borderRadius: 8,
        height: 44,
        width: '90%',
    },
    titulo: {
        fontWeight: 'semibold',
        fontSize: 26,
        color: '#8A07DA',
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 5,
        padding: 2
    }
});

export default estilos;